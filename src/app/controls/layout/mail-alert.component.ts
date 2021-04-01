import { Component, OnInit } from '@angular/core';
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'control-mail-alert',
  templateUrl: './mail-alert.component.html',
  styleUrls: ['./mail-alert.component.scss'],
})
export class MailAlertControl implements OnInit {
  iconMail: IconDefinition = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
