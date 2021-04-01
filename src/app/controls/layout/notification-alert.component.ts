import { Component, OnInit } from '@angular/core';
import { IconDefinition, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'control-notification-alert',
  templateUrl: './notification-alert.component.html',
  styleUrls: ['./notification-alert.component.scss'],
})
export class NotificationAlertControl implements OnInit {
  iconBell: IconDefinition = faBell;

  constructor() {}

  ngOnInit(): void {}
}
