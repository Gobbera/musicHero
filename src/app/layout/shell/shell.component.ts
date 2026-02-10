import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ButtonModule, CommonModule],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
})
export class ShellComponent {
  appName = 'To Be Guitar Hero';
}
