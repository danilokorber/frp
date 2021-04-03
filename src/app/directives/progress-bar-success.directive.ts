import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[progress-bar-success]',
})
export class ProgressBarSuccessDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.className += ' from-green-900 via-green-900 to-green-800 ';
  }
}
