
import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ShellComponent } from '../../layout/shell/shell.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule,
            ButtonModule,
            ShellComponent
          ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {
  minutosHoje = 20;
  foco = 'Técnica';
}
