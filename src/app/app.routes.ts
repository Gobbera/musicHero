import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'exercises',
        loadComponent: () =>
          import('./features/exercises/exercises.component').then((m) => m.ExercisesComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
