import { Component } from '@angular/core';
import { Button } from "primeng/button";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [Button],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
})
export class Topbar {

}
