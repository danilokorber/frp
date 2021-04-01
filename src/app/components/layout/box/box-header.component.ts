import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'box-header',
  templateUrl: './box-header.component.html',
  styles: [],
})
export class BoxHeaderComponent implements OnInit {
  @Input() icon: IconDefinition;

  constructor() {}

  ngOnInit(): void {
    console.log(this.icon);
  }
}
