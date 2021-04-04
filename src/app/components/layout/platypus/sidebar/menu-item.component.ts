import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'platypus-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() route: Route;

  constructor() {}

  ngOnInit(): void {}
}
