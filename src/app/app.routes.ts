import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./Login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },

  {
    path: '',
    loadComponent: () =>
      import('./main-layout-component/main-layout-component.component').then(
        (m) => m.MainLayoutComponentComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./employes-list/employes-list.component').then(
            (m) => m.employeListComponent
          ),
      },
    ],
  },

  { path: '**', component: NotFoundComponent },
];
