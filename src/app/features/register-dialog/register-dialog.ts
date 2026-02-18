import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.html',
  styleUrls: ['./register-dialog.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    FloatLabelModule
  ],
})
export class RegisterDialog {

  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  name = '';
  phone = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;

  close() {
    this.visibleChange.emit(false);
  }

  canRegister(): boolean {
    return (
      this.name.length > 2 &&
      this.email.includes('@') &&
      this.password.length >= 6 &&
      this.password === this.confirmPassword &&
      this.acceptTerms
    );
  }

  register() {
    if (!this.canRegister()) return;

    console.log('Cadastrar usuário:', {
      name: this.name,
      phone: this.phone,
      email: this.email,
      password: this.password
    });

    this.close();
  }
}
