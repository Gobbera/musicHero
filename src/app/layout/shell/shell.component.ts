import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';
import { SessionAnalyticsComponent } from "../../features/session-analytics-component/session-analytics-component";
import { Card } from "primeng/card";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet,
    ButtonModule,
    CommonModule,
    Sidebar,
    Topbar],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
})
export class ShellComponent {
  appName = 'To Be Guitar Hero';
}
