import { MenuItem } from 'primeng/api';

export const dashboardMenu: MenuItem[] = [
  { label: 'Perfil', icon: 'pi pi-user', routerLink: ['/profile'] },
  { label: 'Rotinas', icon: 'pi pi-star', routerLink: ['/routines'] },
  { label: 'Sessões', icon: 'pi pi-users', routerLink: ['/sessions'] },
  { label: 'Exercícios', icon: 'pi pi-sliders-h', routerLink: ['/exercicios'] },
];

export const profileMenu: MenuItem[] = [
  { label: 'Dashboard', icon: 'pi pi-chart-line', routerLink: ['/dashboard'] },
  { label: 'Configurações', icon: 'pi pi-cog',
    items: [
      { label: 'Editar perfil', icon: 'pi pi-user-edit', routerLink: ['/edit-profile'] },
      { label: 'Conta', icon: 'pi pi-lock', routerLink: ['/account'] },
      { label: 'Linguagem', icon: 'pi pi-language', routerLink: ['/language'] },
    ],
  },
  { label: 'Estatísticas', icon: 'pi pi-chart-line', routerLink: ['/statistics'] },
  { label: 'Conquistas', icon: 'pi pi-star', routerLink: ['/achievements'] },
  { label: 'Social', icon: 'pi pi-users', routerLink: ['/social'] },
  { label: 'Configuração de prática', icon: 'pi pi-sliders-h', routerLink: ['/pratice-settings'] },
];
