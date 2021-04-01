import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[box-success]',
})
export class BoxSuccessDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    //this.el.nativeElement.firstChild.className += ' border-green-900 bg-green-50 ';
    this.el.nativeElement.firstChild.firstChild.firstChild.className += ' bg-gradient-to-b from-green-800 to-green-900 text-white ';
  }
}
