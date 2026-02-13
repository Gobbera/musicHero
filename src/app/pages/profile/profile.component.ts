import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, ButtonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent {

  /* user: UserProfile = {
    name: 'Leonardo',
    photoUrl: 'https://i.pravatar.cc/150?img=3',
    level: 5,
    xp: 320,
    instruments: ['Guitarra', 'Violão'],
    genres: ['Rock', 'Metal'],
    goals: ['Aprender solos rápidos', 'Melhorar improviso']
  };

  editProfile() {
    console.log('Editar perfil clicado');
  } */
}
