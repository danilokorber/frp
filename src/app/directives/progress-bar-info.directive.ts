import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[progress-bar-info]',
})
export class ProgressBarInfoDirective {
  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.firstChild.firstChild.className += ' from-lightBlue-900 via-lightBlue-900 to-lightBlue-800 ';
  }
}
