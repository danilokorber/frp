import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[grid-cols]',
})
export class GridColsDirective {
  @Input() 'grid-cols': number = 4;

  constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.el.nativeElement.className += ' grid-cols-' + this['grid-cols'] + ' ';
  }
}
