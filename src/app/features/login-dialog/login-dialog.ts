import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login-dialog.scss'],
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule],
})
export class LoginDialog {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Output() goToRegister = new EventEmitter<void>();

  close() {
    this.visibleChange.emit(false);
  }
  
  openRegister() {

    this.visibleChange.emit(false);
    this.goToRegister.emit();
  }
}
