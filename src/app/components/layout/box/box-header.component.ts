import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCompressAlt, faCross, faExpandAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'box-header',
  templateUrl: './box-header.component.html',
  styles: [],
})
export class BoxHeaderComponent implements OnInit {
  @Input() icon: IconDefinition;

  iconClose: IconDefinition = faTimes;

  iconExpand: IconDefinition = faExpandAlt;
  iconCompress: IconDefinition = faCompressAlt;
  iconResize: IconDefinition = this.iconCompress;

  constructor() {}

  ngOnInit(): void {
    console.log(this.icon);
  }
}
