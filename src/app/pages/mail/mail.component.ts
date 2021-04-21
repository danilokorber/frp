import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Thread } from '@interfaces/mail';
import { MailService } from '@services/mail.service';

@Component({
  selector: 'mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss'],
})
export class MailPage implements AfterViewInit {
  threads: Thread[] = [];
  account: string;
  selectedThreadId: string = '';

  constructor(private mail: MailService) {
    this.account = 'danilo_korber.com.br';
  }

  ngAfterViewInit(): void {
    this.mail.getThreads(this.account).subscribe((threadList: Thread[]) => {
      this.threads = threadList;
    });
  }

  changeThread(threadId: string): void {
    this.selectedThreadId = threadId;
  }

  deleteThread(threadId: string): void {
    this.mail.getMessagesFromThread(this.account, threadId).subscribe((messages) => {
      messages.forEach((message) => {
        this.mail.deleteMessage(this.account, message.id).subscribe((r) => {
          console.log(message.id, r);
        });
      });
      this.threads = this.threads.filter((thread) => thread.id != threadId);
    });
  }
}
