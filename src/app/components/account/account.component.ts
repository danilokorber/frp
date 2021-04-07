import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faSignOutAlt, faUserAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@services/auth.service';

const DEFAULT_DURATION = 200;

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: [],
  animations: [
    trigger('collapse', [
      state('true', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('false', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out')),
    ]),
  ],
})
export class AccountComponent implements OnInit {
  isActive: boolean = false;

  iconAccount: IconDefinition = faUserAlt;
  iconExit: IconDefinition = faSignOutAlt;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  toggle() {
    this.isActive = !this.isActive;
  }

  username(): string {
    return this.authService.getProperty('name');
  }

  logout(): void {
    this.authService.logout();
  }
}
