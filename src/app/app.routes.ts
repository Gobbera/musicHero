import { Routes } from '@angular/router';

export const routes: Routes = [

  // Tela de primeiros passos (sem layout)
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
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component')
        .then(m => m.DashboardComponent),
  },
  { path: '**', redirectTo: '' },
];
