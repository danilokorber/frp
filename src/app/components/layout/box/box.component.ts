import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, ContentChild, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  @Input() collapsable: boolean = false;
  @Input() closeable: boolean = false;
  @Input() isCollapsed: boolean = false;
  @Input() isClosed: boolean = false;

  constructor() {}

  @ContentChild(BoxHeaderComponent) boxHeader: BoxHeaderComponent;

  ngAfterContentInit() {
    this.boxHeader.collapsable = this.isCollapsed || this.collapsable;
    this.boxHeader.isCollapsed = this.isCollapsed;
    this.boxHeader.closeable = this.closeable;
    this.boxHeader.onResize.subscribe((event) => {
      this.isCollapsed = event;
    });
    this.boxHeader.onClose.subscribe(() => {
      this.isClosed = true;
    });
  }

  ngOnInit(): void {}
}
