import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Button } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

import { LoginDialog } from '../../features/login-dialog/login-dialog';
import { RegisterDialog } from '../../features/register-dialog/register-dialog';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [Button, MenuModule, LoginDialog, RegisterDialog, FormsModule],
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.scss'],
})
export class Topbar {
  @Input({ required: true }) title = '';

  loginVisible = false;
  registerVisible = false;

  selectedLang = 'pt';

  languageItems: MenuItem[] = [
    {
      label: 'Português',
      icon: 'pi pi-globe',
      command: () => this.setLang('pt'),
    },
    {
      label: 'English',
      icon: 'pi pi-globe',
      command: () => this.setLang('en'),
    },
    {
      label: 'Español',
      icon: 'pi pi-globe',
      command: () => this.setLang('es'),
    },
  ];

  setLang(lang: string) {
    this.selectedLang = lang;
    console.log('Idioma escolhido:', lang);
  }

  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }

  openLogin() {
    this.registerVisible = false;
    queueMicrotask(() => (this.loginVisible = true));
  }

  openRegister() {
    this.loginVisible = false;
    setTimeout(() => (this.registerVisible = true), 0);
  }
}
