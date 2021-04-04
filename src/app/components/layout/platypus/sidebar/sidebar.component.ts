import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { IconDefinition, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_DURATION = 200;

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ width: '15rem' })),
      state('true', style({ width: '4.5rem' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
    trigger('rotate', [
      state('false', style({ transform: 'rotate(-180deg)' })),
      state('true', style({ transform: 'rotate(0)' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class SidebarComponent implements OnInit {
  leftMenuItems: Routes = [];
  iconToggle: IconDefinition = faArrowRight;
  isCollapsed: boolean = true;

  constructor(private router: Router) {
    this.leftMenuItems = this.router.config.filter((r) => r.data && r.data.icon);
  }

  ngOnInit(): void {}

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
