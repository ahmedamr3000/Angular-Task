import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../fake-auth-service.service'; // import service

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  apiError: string | null = null;
  isLoading: boolean = false;
  rememberMe: boolean = false;

  constructor(
    private _FormBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this._FormBuilder.group({
      identifier: ['', [this.identifierValidator]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          ),
        ],
      ],
    });
  }

  identifierValidator(control: any) {
    const value = control.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const egyptianPhoneRegex = /^(010|011|012|015)[0-9]{8}$/;

    if (!value || value.trim() === '') return { required: true };

    if (emailRegex.test(value) || egyptianPhoneRegex.test(value)) {
      return null;
    }

    return { invalidIdentifier: true };
  }

  onSubmit() {
    console.log('Form submitted');

    if (this.loginForm.invalid) return;

    this.apiError = null;
    this.isLoading = true;

    const { identifier, password } = this.loginForm.value;

    this.authService.login(identifier, password).subscribe({
      next: (user) => {
        this.isLoading = false;
        console.log('ddd');

        const userStorage = this.rememberMe ? localStorage : sessionStorage;
        userStorage.setItem('loggedInUser', JSON.stringify(user));
        console.log('ddd');

        this.router.navigate(['/home']);
        console.log('ddd');
      },
      error: (err) => {
        this.isLoading = false;
        this.apiError = err || 'Invalid credentials';
      },
    });
  }
}
