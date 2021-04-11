import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';

const authConfig = environment.oidcConfig;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //private jwtHelper: JwtHelperService = new JwtHelperService();
  private _decodedAccessToken: any;
  private _decodedIDToken: any;
  get decodedAccessToken() {
    return this._decodedAccessToken;
  }
  get decodedIDToken() {
    return this._decodedIDToken;
  }

  constructor(private oauthService: OAuthService, private router: Router, private http: HttpClient, private injector: Injector) {}

  async initAuth(): Promise<any> {
    return new Promise<void>((resolveFn, rejectFn) => {
      this.oauthService.configure(authConfig);

      // subscribe to token events
      //this.oauthService.events.pipe(filter((e: any) => e.type === 'token_received')).subscribe(() => this.handleNewToken());

      // continue initializing app (provoking a token_received event) or redirect to login-page
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then((isLoggedIn) => {
        if (isLoggedIn) {
          this.oauthService.setupAutomaticSilentRefresh();
          resolveFn();
        } else {
          this.oauthService.initImplicitFlow();
          rejectFn();
        }
      });
    });
  }

  // private handleNewToken() {
  //   this._decodedAccessToken = this.jwtHelper.decodeToken(this.oauthService.getAccessToken());
  //   this._decodedIDToken = this.jwtHelper.decodeToken(this.oauthService.getIdToken());
  // }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.revokeTokenAndLogout();
  }

  public isAuthenticated(): boolean {
    console.log(JSON.parse(JSON.stringify(this.oauthService.getIdentityClaims())));

    var hasIdToken = this.oauthService.hasValidIdToken();
    var hasAccessToken = this.oauthService.hasValidAccessToken();
    return hasIdToken && hasAccessToken;
  }

  public getToken() {
    return this.oauthService.getIdentityClaims();
  }

  public getProperty(propertyName: string): any {
    if (this.isAuthenticated) {
      return this.oauthService.getIdentityClaims()[propertyName];
    } else {
      this.logout();
    }
  }
}
