import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { employesFilterComponent } from '../employes-filters/employes-filters.component';
import { Employe } from '../models/employe.model';
import { AuthService } from '../fake-auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from '../add-employee-dialog-component/add-employee-dialog-component.component';
import { MatButtonModule } from '@angular/material/button';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employes-table',
  standalone: true,
  templateUrl: './employes-table.component.html',
  styleUrls: ['./employes-table.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    employesFilterComponent,
    MatButtonModule,
  ],
})
export class EmployesTableComponent implements AfterViewInit, OnInit {
  constructor(
    private authService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  confirmingDeleteProductId: boolean | null = null;
  selectedEmployee: Employe | null = null;
  currentUserEmail: string | null = null;

  openAddEmployeeDialog() {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.originalData.push(result);
        this.dataSource.data = this.originalData;
      }
    });
  }
  openUpdateEmployeeDialog(emp: Employe) {
    console.log(emp);

    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '600px',
      data: emp,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.originalData.findIndex((e) => e.id === result.id);
        if (index !== -1) {
          this.originalData[index] = result;
          this.dataSource.data = [...this.originalData];
        }
      }
    });
  }

  ngOnInit() {
    this.originalData = this.authService.getUsers().map((user, index) => ({
      ...user,
      id: index + 1,
    }));
    this.dataSource.data = this.originalData;

    let userData = sessionStorage.getItem('loggedInUser');

    if (!userData) {
      userData = localStorage.getItem('loggedInUser');
    }
    if (userData) {
      const parsedUser = JSON.parse(userData);
      this.currentUserEmail = parsedUser.email;
    }
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'image',
    'sallary',
    'position',
    'actions',
  ];
  dataSource = new MatTableDataSource<Employe>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  originalData: Employe[] = [];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onFilterChange(filters: { name: string; email: string }) {
    const filteredData = this.originalData.filter(
      (employe) =>
        employe.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        employe.email.toLowerCase().includes(filters.email.toLowerCase())
    );

    this.dataSource.data = filteredData;
    this.paginator?.firstPage();
  }

  confirmDelete(emp: Employe) {
    this.selectedEmployee = emp;
    this.confirmingDeleteProductId = true;
  }

  cancelDelete() {
    this.selectedEmployee = null;
    this.confirmingDeleteProductId = false;
  }

  proceedDelete() {
    if (this.currentUserEmail === this.selectedEmployee?.email) {
      this.snackBar.open('⚠️ You cannot delete your own account!', 'Close', {
        duration: 4000,
        panelClass: ['warn-snackbar'],
      });
      this.confirmingDeleteProductId = false;

      return;
    }

    if (this.selectedEmployee) {
      this.originalData = this.originalData.filter(
        (emp) => emp.id !== this.selectedEmployee!.id
      );
      this.dataSource.data = this.originalData;

      this.selectedEmployee = null;
      this.confirmingDeleteProductId = false;
    }
  }
}
