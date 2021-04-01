import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, ContentChild, OnInit } from '@angular/core';
import { BoxHeaderComponent } from './box-header.component';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class BoxComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor() {}

  @ContentChild(BoxHeaderComponent) boxHeader: BoxHeaderComponent;

  ngAfterContentInit() {
    this.boxHeader.onResize.subscribe((event) => {
      this.isCollapsed = event;
    });
  }

  ngOnInit(): void {}
}
