import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[grid]',
})
export class GridDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.className += ' grid ';
  }
}
