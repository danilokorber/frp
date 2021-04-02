import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[box-info]',
})
export class BoxInfoDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.firstChild.className += ' bg-gradient-to-b from-lightBlue-800 to-lightBlue-900 text-white ';
  }
}
