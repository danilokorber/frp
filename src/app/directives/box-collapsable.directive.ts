import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[box-collapsable]',
})
export class BoxCollapsableDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement.attributes);
    var attr = document.createAttribute('ng-reflect-collapsable');
    attr.value = 'true';
    this.el.nativeElement.attributes.setNamedItem(attr);
  }
}
