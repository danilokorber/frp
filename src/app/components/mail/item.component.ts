import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { faEnvelope, faEnvelopeOpen, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MailService } from '@services/mail.service';

@Component({
  selector: 'mail-item',
  templateUrl: './item.component.html',
  styleUrls: [],
})
export class MailItemComponent implements OnInit {
  @Input() thread: any;
  icon: IconDefinition = faEnvelopeOpen;

  constructor(private mail: MailService) {}
  ngOnInit(): void {
    if (this.thread.unseen) {
      this.icon = faEnvelope;
    }
  }
}
