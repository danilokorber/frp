import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[box-error]',
})
export class BoxErrorDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.firstChild.className += ' bg-gradient-to-b from-rose-800 to-rose-900 text-white ';
  }
}
