import { MatButtonModule } from '@angular/material/button';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmployesTableComponent } from '../employes-table/employes-table.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-employe-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EmployesTableComponent,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css'],
})
export class employeListComponent {}
