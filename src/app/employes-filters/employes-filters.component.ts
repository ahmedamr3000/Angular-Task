import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-employes-filter',
  templateUrl: './employes-filters.component.html',
  styleUrls: ['./employes-filters.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class employesFilterComponent {
  nameFilter = '';
  emailFilter = '';

  @Output() filterChange = new EventEmitter<{ name: string; email: string }>();

  onFilterChange() {
    this.filterChange.emit({
      name: this.nameFilter,
      email: this.emailFilter,
    });
  }
}
