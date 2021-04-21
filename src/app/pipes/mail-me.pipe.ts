import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@interfaces/mail';
import { AuthService } from '@services/auth.service';

@Pipe({
  name: 'mailMe',
})
export class MailMePipe implements PipeTransform {
  constructor(private auth: AuthService) {}

  transform(address: Address): string {
    return this.isMe(address.name) || this.isMe(address.address);
  }

  isMe(address): string {
    let isMe = address == this.auth.getProperty('email') || address == this.auth.getProperty('name');
    return isMe ? 'eu' : address;
  }
}
