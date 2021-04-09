import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconDefinition, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MailService } from '@services/mail.service';
import { Observable, timer } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'control-mail-alert',
  templateUrl: './mail-alert.component.html',
  styleUrls: [],
})
export class MailAlertControl implements OnInit, OnDestroy {
  iconMail: IconDefinition = faEnvelope;
  unreadMessagesCount: number = 0;
  observer: Observable<number>;
  interval: number = 10000;
  isAlive: boolean = true;

  constructor(private mail: MailService) {}

  ngOnInit(): void {
    timer(0, this.interval)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(() => {
        this.mail.getUnreadMessagesCount('danilo_korber.com.br').subscribe((count: number) => {
          console.log('New value: ', count);
          this.unreadMessagesCount = count;
        });
      });
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
