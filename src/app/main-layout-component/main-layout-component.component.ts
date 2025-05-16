import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-main-layout-component',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent],
  templateUrl: './main-layout-component.component.html',
  styleUrls: ['./main-layout-component.component.css'],
})
export class MainLayoutComponentComponent {}
