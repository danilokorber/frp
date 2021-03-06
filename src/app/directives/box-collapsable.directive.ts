import { Directive, OnInit } from '@angular/core';
import { BoxComponent } from '@components/box/box.component';

@Directive({
  selector: '[box-collapsable]',
})
export class BoxCollapsableDirective implements OnInit {
  constructor(private box: BoxComponent) {}

  ngOnInit(): void {
    this.box.collapsable = true;
  }
}
