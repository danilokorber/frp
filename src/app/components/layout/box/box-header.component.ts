import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp, faTimes, faWindowMaximize, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'box-header',
  templateUrl: './box-header.component.html',
  styles: [],
})
export class BoxHeaderComponent implements OnInit {
  @Input() icon: IconDefinition;
  @Input() collapsable: boolean = false;
  @Input() closeable: boolean = false;
  @Output() onResize: EventEmitter<boolean> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  isCollapsed: boolean = false;

  iconClose: IconDefinition = faTimes;

  constructor() {}

  ngOnInit(): void {}

  iconResize(): IconDefinition {
    return this.isCollapsed ? faArrowDown : faArrowUp;
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.onResize.emit(this.isCollapsed);
  }

  closeBox() {
    this.onClose.emit(this.isCollapsed);
  }
}
