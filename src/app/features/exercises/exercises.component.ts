import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercises.html',
  styleUrls: ['./exercises.scss'],
})
export class ExercisesComponent {
  exercises = [
    { name: 'Exercício 1' },
    { name: 'Exercício 2' },
    { name: 'Exercício 3' },
  ];
}
