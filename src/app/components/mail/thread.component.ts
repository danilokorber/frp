import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faEnvelopeOpen, faEnvelope, faTrashAlt, faPaperclip, faSpinner, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Address, Message, MessageText, Thread } from '@interfaces/mail';
import { AuthService } from '@services/auth.service';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';
import { MailService } from '@services/mail.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const DEFAULT_DURATION = 300;

@Component({
  selector: 'mail-thread',
  templateUrl: './thread.component.html',
  styles: [],
  animations: [
    trigger('active', [
      state('true', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('false', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class MailThreadComponent implements OnInit {
  @Input() thread: Thread;
  @Input() isActive: any;
  @Output() onSelectThread: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  iconOpen: IconDefinition = faEnvelopeOpen;
  iconClose: IconDefinition = faEnvelope;
  iconAttachment: IconDefinition = faPaperclip;
  iconTrash: IconDefinition = faTrashAlt;
  iconLoading: IconDefinition = faSpinner;
  iconSelected: IconDefinition = faCaretRight;

  isHovered: boolean = false;

  messages: Message[] = [];
  selectedMessage: Message;
  selectedText: MessageText;

  a: string[] = [];
  d: string;

  account: string;

  constructor(private auth: AuthService, private mail: MailService, private sanitizer: DomSanitizer) {
    this.account = 'danilo_korber.com.br';
  }

  ngOnInit(): void {
    dayjs.extend(relativeTime).locale('pt-br');
    let isoString = this.thread.date.toString().substr(0, 20);
    let isoDate: Date = new Date(isoString);
    this.d = dayjs(isoDate).fromNow();
  }

  from(address: Address): string {
    let from = this.isMe(address.name) || this.isMe(address.address);

    if (this.thread.size > 1) {
      from = '(...) ' + from;
    }
    return from;
  }

  isMe(address): string {
    let isMe = address == this.auth.getProperty('email') || address == this.auth.getProperty('name');
    return isMe ? 'eu' : address;
  }

  toggleReadPanel(): void {
    this.isActive = !this.isActive;
    if (this.thread.unseen) {
      this.thread.unseen = false;
    }

    if (this.isActive) {
      this.mail.getMessagesFromThread('danilo_korber.com.br', this.thread.id).subscribe((messages) => {
        this.messages = messages;
        this.selectMessage(this.messages[0].emailId);
        this.mail.readMessage(this.account, this.selectedMessage.id).subscribe((message) => {});
      });
      this.onSelectThread.emit(this.thread.id);
    } else {
      this.messages = [];
      this.selectedMessage = undefined;
      this.selectedText = undefined;
    }
  }

  mouseEnter(): void {
    this.isHovered = true;
  }

  mouseLeave(): void {
    this.isHovered = false;
  }

  selectMessage(emailId: string): void {
    this.selectedMessage = this.messages.find((m) => m.emailId === emailId);
  }

  deleteThread() {
    this.isActive = false;
    this.delete.emit(this.thread.id);
  }

  bodyUrl(): string {
    return 'https://platypus-api.korber.com.br/api/v1/mail/danilo_korber.com.br/messages/html/' + this.selectedMessage.text.id;
  }
}
