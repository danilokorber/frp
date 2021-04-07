import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'platypus-menu',
  templateUrl: './menu.component.html',
  styleUrls: [],
})
export class MenuComponent implements OnInit {
  @Input() routes: Route[] = [];
  constructor() {}

  ngOnInit(): void {}
}
