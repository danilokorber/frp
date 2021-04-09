import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MailService } from '../../services/mail.service';

@Injectable({
  providedIn: 'root',
})
export class MailUnreadCountService implements Resolve<any> {
  constructor(private mail: MailService) {}

  resolve() {
    return this.mail.getUnreadMessagesCount('danilo_korber.com.br');
  }
}
