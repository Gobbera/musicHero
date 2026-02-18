
import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SessionAnalyticsComponent } from "../../features/session-analytics-component/session-analytics-component";
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardModule, 
    SplitterModule,
    ButtonModule,
    SessionAnalyticsComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class Dashboard {
  minutosHoje = 20;
  foco = 'Técnica';
}
