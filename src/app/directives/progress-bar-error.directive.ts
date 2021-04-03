import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[progress-bar-error]',
})
export class ProgressBarErrorDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.className += ' from-rose-900 via-rose-900 to-rose-800 ';
  }
}
