import { Component, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'platypus-rancho',
  templateUrl: './rancho.component.html',
  styleUrls: ['./rancho.component.scss'],
})
export class RanchoPage implements OnInit {
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
