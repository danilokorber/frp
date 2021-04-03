import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[progress-bar-warning]',
})
export class ProgressBarWarningDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.className += ' from-amber-500 via-amber-500 to-amber-400 ';
  }
}
