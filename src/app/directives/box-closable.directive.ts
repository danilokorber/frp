import { Directive, OnInit } from '@angular/core';
import { BoxComponent } from '@components/box/box.component';

@Directive({
  selector: '[box-closeable]',
})
export class BoxClosableDirective implements OnInit {
  constructor(private box: BoxComponent) {}

  ngOnInit(): void {
    this.box.closeable = true;
  }
}
