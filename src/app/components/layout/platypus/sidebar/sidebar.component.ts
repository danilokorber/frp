import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { IconDefinition, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_DURATION = 200;

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [],
  animations: [
    trigger('collapse', [
      state('false', style({ width: '15rem' })),
      state('true', style({ width: '4.5rem' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  leftMenuItems: Routes = [];
  iconToggle: IconDefinition = faArrowLeft;
  isCollapsed: boolean = false;

  constructor(private router: Router) {
    this.leftMenuItems = this.router.config.filter((r) => r.data && r.data.icon);
  }

  ngOnInit(): void {}

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconToggle = this.isCollapsed ? faArrowRight : faArrowLeft;
  }
}
