import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MailService } from '@services/mail.service';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailPage implements AfterViewInit {
  threads: any[] = [];

  constructor(private mail: MailService) {}

  ngAfterViewInit(): void {
    this.mail.getMessages('danilo_korber.com.br').subscribe((mailList: any[]) => {
      console.log(mailList);
      this.threads = mailList;
    });
  }
}
