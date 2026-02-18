import { Routes } from '@angular/router';
import { dashboardMenu, profileMenu } from './navigation/menus';

export const routes: Routes = [
  {
    path: 'onboarding',
    loadComponent: () =>
      import('./pages/onboarding/onboarding.component')
        .then(m => m.OnboardingComponent),
  },

  {
    path: '',
    loadComponent: () =>
      import('./layout/shell/shell.component')
        .then(m => m.ShellComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard')
            .then(m => m.Dashboard),
        data: {
          title: 'Dashboard', 
          sidebar: dashboardMenu },
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile')
            .then(m => m.ProfileComponent),
        data: { 
          title: 'Profile',
          sidebar: profileMenu },
      },
      {
        path: 'routines',
        loadComponent: () =>
          import('./pages/routines/routines')
            .then(m => m.Routines),
        data: { 
          title: 'Dashboard / Rotinas',
          sidebar: dashboardMenu },
      },

      {
        path: 'sessions',
        loadComponent: () =>
          import('./pages/sessions/sessions')
            .then(m => m.Sessions),
        data: { 
          title: 'Dashboard / Sessões',
          sidebar: dashboardMenu },
      },

      {
        path: 'exercicios',
        loadComponent: () =>
          import('./pages/exercises/exercises')
            .then(m => m.Exercises),
        data: { 
          title: 'Dashboard / Exercicios',
          sidebar: dashboardMenu },
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./pages/account/account')
            .then(m => m.Account),
        data: { 
          title: 'Perfil / Conta',
          sidebar: profileMenu },
      },
      {
        path: 'achievements',
        loadComponent: () =>
          import('./pages/achievements/achievements')
            .then(m => m.Achievements),
        data: { 
          title: 'Perfil / Conquistas',
          sidebar: profileMenu },
      },
      {
        path: 'edit-profile',
        loadComponent: () =>
          import('./pages/edit-profile/edit-profile')
            .then(m => m.EditProfile),
        data: { 
          title: 'Perfil / Editar Perfil',
          sidebar: profileMenu },
      },
      {
        path: 'language',
        loadComponent: () =>
          import('./pages/language/language')
            .then(m => m.Language),
        data: { 
          title: 'Perfil / Linguagem',
          sidebar: profileMenu },
      },
      {
        path: 'pratice-settings',
        loadComponent: () =>
          import('./pages/pratice-settings/pratice-settings')
            .then(m => m.PraticeSettings),
        data: { 
          title: 'Perfil / Configurações de pratica',
          sidebar: profileMenu },
      },
      {
        path: 'social',
        loadComponent: () =>
          import('./pages/social/social')
            .then(m => m.Social),
        data: { 
          title: 'Perfil / Social',
          sidebar: profileMenu },
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./pages/statistics/statistics')
            .then(m => m.Statistics),
        data: { 
          title: 'Perfil / Estatisticas',
          sidebar: profileMenu },
      },
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];
