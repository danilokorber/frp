import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@services/auth.service';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'platypus-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginPage implements OnInit {
  authConfig: AuthConfig = environment.oidcConfig;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  public login() {
    this.auth.login();
  }

  public logout() {
    this.auth.logout();
  }
}
