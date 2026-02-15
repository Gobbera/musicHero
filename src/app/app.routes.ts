import { Routes } from '@angular/router';

export const routes: Routes = [
  // Rotas sem layout/shell
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.component')
        .then(m => m.OnboardingComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component')
        .then(m => m.ProfileComponent),
  },

  // Rotas COM layout (Shell)
  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component') // ajuste o caminho conforme seu projeto
        .then(m => m.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component')
            .then(m => m.DashboardComponent),
      },
      {
        path: 'routines',
        loadComponent: () =>
          import('./pages/routines/routines')
            .then(m => m.Routines),
      },
      {
        path: 'sessions',
        loadComponent: () =>
          import('./pages/sessions/sessions')
            .then(m => m.Sessions),
      },
      {
        path: 'exercicios',
        loadComponent: () =>
          import('./pages/exercises/exercises')
            .then(m => m.Exercises),
      }
    ],
  }, 

  // fallback
  { path: '**', redirectTo: 'dashboard' },
];
