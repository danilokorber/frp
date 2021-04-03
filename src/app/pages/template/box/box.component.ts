import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'platypus-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxPage implements OnInit {
  iconHome = faHome;
  constructor() {}

  ngOnInit(): void {}

  onCollapse() {
    console.log('collapsed');
  }
  onExpand() {
    console.log('expanded');
  }
  onClose() {
    console.log('closed');
  }
}
