import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private employes = [
    {
      id: 1,
      name: 'Marwan',
      email: 'marwan@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 20000,
      phone: '01066245937',
      password: 'Marwan@123',
      position: 'Co-Founder',
    },
    {
      id: 1,
      name: 'Ahmed Marwan',
      email: 'ahmed.marwan@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7000,
      phone: '01000000001',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 2,
      name: 'Mohamed Tarek',
      email: 'mohamed.tarek@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7500,
      phone: '01000000002',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 3,
      name: 'Youssef Khaled',
      email: 'youssef.khaled@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7200,
      phone: '01000000003',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 4,
      name: 'Mostafa Gamal',
      email: 'mostafa.gamal@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 6800,
      phone: '01000000004',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 5,
      name: 'Omar Mahmoud',
      email: 'omar.mahmoud@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 8000,
      phone: '01000000005',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 6,
      name: 'Ali Hassan',
      email: 'ali.hassan@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 6900,
      phone: '01000000006',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 7,
      name: 'Karim Adel',
      email: 'karim.adel@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7100,
      phone: '01000000007',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 8,
      name: 'Tamer Samir',
      email: 'tamer.samir@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7300,
      phone: '01000000008',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 9,
      name: 'Ibrahim Nabil',
      email: 'ibrahim.nabil@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7700,
      phone: '01000000009',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 10,
      name: 'Mahmoud Ehab',
      email: 'mahmoud.ehab@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7600,
      phone: '01000000010',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 11,
      name: 'Hossam ElDin',
      email: 'hossam.eldin@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7400,
      phone: '01000000011',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 12,
      name: 'Amr Saeed',
      email: 'amr.saeed@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7800,
      phone: '01000000012',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 13,
      name: 'Walid Ashraf',
      email: 'walid.ashraf@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7300,
      phone: '01000000013',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 14,
      name: 'Aly Sherif',
      email: 'aly.sherif@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7600,
      phone: '01000000014',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 15,
      name: 'Nour Eldin',
      email: 'nour.eldin@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 7900,
      phone: '01000000015',
      password: 'Ttest@123',
      position: 'Employee',
    },
    {
      id: 16,
      name: 'Marwan',
      email: 'marwan@example.com',
      image: 'https://via.placeholder.com/40',
      sallary: 20000,
      phone: '01066245937',
      password: 'marwan@123',
      position: 'Co-Founder',
    },
  ];
  getUsers() {
    return this.employes;
  }

  login(identifier: string, password: string): Observable<any> {
    const user = this.employes.find(
      (u) =>
        (u.email === identifier || u.phone === identifier) &&
        u.password === password
    );

    if (user) {
      return of(user);
    } else {
      return throwError(() => 'Email or password is incorrect');
    }
  }
}
