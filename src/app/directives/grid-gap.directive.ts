import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[grid-gap]',
})
export class GridGapDirective {
  @Input() 'grid-gap': number = 4;

  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.className += ' gap-' + this['grid-gap'] + ' ';
  }
}
