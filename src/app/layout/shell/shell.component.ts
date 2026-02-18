import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

import { MenuItem } from 'primeng/api';

import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Sidebar, Topbar],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  pageTitle = '';
  sidebarItems: MenuItem[] = [];
  private sub?: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.updateSidebarFromRoute();

    this.sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => this.updateSidebarFromRoute());
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private updateSidebarFromRoute(): void {
  let current: ActivatedRoute | null = this.route;
  while (current?.firstChild) current = current.firstChild;

  while (current && !current.snapshot.data['sidebar'] && !current.snapshot.data['title']) {
    current = current.parent;
    }

    this.sidebarItems = (current?.snapshot.data['sidebar'] as MenuItem[]) ?? [];
    this.pageTitle = (current?.snapshot.data['title'] as string) ?? '';
  }
}
