import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'platypus-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: [],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class MenuItemComponent implements OnInit {
  @Input() route: Route;
  @Input() isChild: boolean = false;
  @Input() parent: string = '';

  isCollapsed: boolean = true;

  routerLink: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.children?.length > 0) {
      this.route.children = this.route.children.filter((child) => child.data);
    }
  }

  buttonClick(): void {
    if (this.route.children?.length > 0 && !this.isChild) {
      this.isCollapsed = !this.isCollapsed;
    } else {
      this.router.navigate([this.parent, this.route.path]);
    }
  }
}
