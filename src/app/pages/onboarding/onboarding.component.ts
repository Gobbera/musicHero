import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ChipModule,
    ButtonModule
  ],
  templateUrl: './onboarding.html',
  styleUrls: ['./onboarding.scss']
})
export class OnboardingComponent {

  instruments = ['Guitarra', 'Violão', 'Baixo', 'Bateria', 'Cavaquinho'];
  styles = ['Rock', 'Metal', 'Blues', 'Jazz', 'Pop', 'Instrumental'];
  goals = ['Solos', 'Improvisação', 'Ritmo', 'Técnica', 'Teoria'];

  selectedInstrument: string | null = null;
  selectedStyles: string[] = [];
  selectedGoals: string[] = [];

  toggleTag(list: string[], value: string, max = 3) {
    const index = list.indexOf(value);

    if (index >= 0) {
      list.splice(index, 1);
      return;
    }

    if (list.length < max) {
      list.push(value);
    }
  }

  canContinue() {
    return (
      this.selectedInstrument &&
      this.selectedStyles.length > 0 &&
      this.selectedGoals.length > 0
    );
  }

  save() {
    const data = {
      instrument: this.selectedInstrument,
      styles: this.selectedStyles,
      goals: this.selectedGoals
    };

    localStorage.setItem('userSetup', JSON.stringify(data));
    this.router.navigateByUrl('/');
  }

  constructor(private router: Router) {}
}
