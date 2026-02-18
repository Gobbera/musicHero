import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';


@Component({
  selector: 'app-session-analytics-component',
  imports: [ChartModule],
  templateUrl: './session-analytics-component.html',
  styleUrl: './session-analytics-component.scss',
})
export class SessionAnalyticsComponent {
  data: any;
  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [
        {
          label: 'Personal Wallet',
          data: [4000, 10000, 15000, 4000, 16000, 8000, 12000, 14000, 17000, 5000, 12000, 6000],
          backgroundColor: 'rgba(120, 140, 170, 0.85)',
          borderRadius: 8,
          borderSkipped: false
        },
        {
          label: 'Corporate Wallet',
          data: [2500, 8000, 2000, 7500, 3000, 6500, 7000, 8000, 4500, 9000, 7500, 4000],
          backgroundColor: 'rgba(180, 195, 215, 0.75)',
          borderRadius: 8,
          borderSkipped: false
        },
        {
          label: 'Investment Wallet',
          data: [3500, 5000, 2500, 7000, 2800, 3500, 7500, 8000, 5000, 9000, 8000, 4000],
          backgroundColor: 'rgba(225, 232, 242, 0.95)',
          borderRadius: 8,
          borderSkipped: false
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          align: 'end',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            boxWidth: 8,
            boxHeight: 8
          }
        },
        title: { display: false }
      },
      scales: {
        x: {
          stacked: true,
          grid: { display: false }
        },
        y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
            callback: (value: any) =>
              Number(value).toLocaleString('pt-BR')
          }
        }
      }
    };
  }
}
