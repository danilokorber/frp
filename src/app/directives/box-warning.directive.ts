import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[box-warning]',
})
export class BoxWarningDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.firstChild.className += ' bg-gradient-to-b from-amber-400 to-amber-500 text-white ';
  }
}
