import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import type { TableLazyLoadEvent } from 'primeng/table';

type Difficulty = 'Fácil' | 'Médio' | 'Difícil' | 'Insano';

interface ExerciseRow {
  id: number;
  exercise: string;
  creator: string;
  difficulty: Difficulty;
  rating: number;
}

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule, RatingModule, FormsModule, SkeletonModule],
  templateUrl: './exercises.html',
  styleUrls: ['./exercises.scss'],
})
export class Exercises implements OnInit {
  // UI
  tableHeight = '420px';
  skeletonRows = Array.from({ length: 12 });

  // Data state
  loading = signal<boolean>(true);
  exercises = signal<ExerciseRow[]>([]);
  totalRecords = signal<number>(0);

  ngOnInit(): void {
    // deixa o p-table disparar o primeiro onLazyLoad automaticamente
    // (se não disparar na sua versão, eu te mostro como chamar manualmente)
  }

  // ✅ Lazy load handler
  onLazyLoad(event: TableLazyLoadEvent): void {
    this.loading.set(true);

    const first = event.first ?? 0; // offset
    const rows = event.rows ?? 12;   // page size

    // Aqui você chamaria sua API:
    // this.api.getExercises({ first, rows, sortField, sortOrder, filters }).subscribe(...)

    // Por enquanto: fake "server"
    setTimeout(() => {
      const all = this.fakeServerData(); // total "no servidor"

      const page = all.slice(first, first + rows);

      this.exercises.set(page);
      this.totalRecords.set(all.length);
      this.loading.set(false);
    }, 900);
  }

  severityForDifficulty(d: Difficulty): 'success' | 'info' | 'warn' | 'danger' {
    switch (d) {
      case 'Fácil': return 'success';
      case 'Médio': return 'info';
      case 'Difícil': return 'warn';
      case 'Insano': return 'danger';
    }
  }

  private fakeServerData(): ExerciseRow[] {
    // imagine que isso é o banco / backend
    return [
      { id: 1, exercise: 'Alternate Picking (120bpm)', creator: 'MusicHero', difficulty: 'Médio', rating: 4.5 },
      { id: 2, exercise: 'Palm Muting Groove', creator: 'MusicHero', difficulty: 'Fácil', rating: 4.0 },
      { id: 3, exercise: 'Sweep Arpeggios (3 strings)', creator: 'Comunidade', difficulty: 'Difícil', rating: 4.8 },
      { id: 4, exercise: 'String Skipping Control', creator: 'Comunidade', difficulty: 'Médio', rating: 4.2 },
      { id: 5, exercise: 'Legato Licks (Hammer / Pull-off)', creator: 'MusicHero', difficulty: 'Médio', rating: 4.1 },
      { id: 6, exercise: 'Tapping (2 hands basic)', creator: 'Comunidade', difficulty: 'Difícil', rating: 4.6 },
      { id: 7, exercise: 'Chromatic Warmup', creator: 'MusicHero', difficulty: 'Fácil', rating: 3.9 },
      { id: 8, exercise: 'Economy Picking Drill', creator: 'Comunidade', difficulty: 'Insano', rating: 4.9 },
      { id: 9, exercise: 'String Bending Control', creator: 'MusicHero', difficulty: 'Médio', rating: 4.3 },
      { id: 10, exercise: 'Rhythm Tightness (downstrokes)', creator: 'Comunidade', difficulty: 'Difícil', rating: 4.4 },
      { id: 11, exercise: 'Metronome Endurance', creator: 'MusicHero', difficulty: 'Insano', rating: 4.7 },
      { id: 12, exercise: 'Chord Changes Sprint', creator: 'Comunidade', difficulty: 'Fácil', rating: 3.8 },
    ];
  }
}
