import { Injectable, Injector } from '@angular/core';
import { environment } from '@env/environment';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { JwtHelperService } from '@auth0/angular-jwt';
import { filter } from 'rxjs/operators';

const authConfig = environment.oidcConfig;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  private _decodedAccessToken: any;
  private _decodedIDToken: any;
  get decodedAccessToken() {
    return this._decodedAccessToken;
  }
  get decodedIDToken() {
    return this._decodedIDToken;
  }

  constructor(private oauthService: OAuthService, private injector: Injector) {}

  async initAuth(): Promise<any> {
    return new Promise<void>((resolveFn, rejectFn) => {
      // setup oauthService
      this.oauthService.configure(authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();

      // subscribe to token events
      this.oauthService.events.pipe(filter((e: any) => e.type === 'token_received')).subscribe(() => this.handleNewToken());

      // continue initializing app (provoking a token_received event) or redirect to login-page
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then((isLoggedIn) => {
        if (isLoggedIn) {
          this.oauthService.setupAutomaticSilentRefresh();
          resolveFn();
          // if you don't use clearHashAfterLogin from angular-oauth2-oidc you can remove the #hash or route to some other URL manually:
          // const lazyPath = this.injector.get(LAZY_PATH) as string;
          // this.injector.get(Router).navigateByUrl(lazyPath + '/a') // remove login hash fragments from url
          //   .then(() => resolveFn()); // callback only once login state is resolved
        } else {
          this.oauthService.initImplicitFlow();
          rejectFn();
        }
      });
    });
  }

  private handleNewToken() {
    this._decodedAccessToken = this.jwtHelper.decodeToken(this.oauthService.getAccessToken());
    this._decodedIDToken = this.jwtHelper.decodeToken(this.oauthService.getIdToken());
  }

  public login() {
    console.log('Logging in');

    this.oauthService.initCodeFlow();
  }

  public logout() {
    console.log('Logging out');
    this.oauthService.revokeTokenAndLogout();
  }

  public isAuthenticated(): boolean {
    var hasIdToken = this.oauthService.hasValidIdToken();
    var hasAccessToken = this.oauthService.hasValidAccessToken();
    console.log(this.oauthService.getIdentityClaims());

    console.log(hasIdToken, hasAccessToken);

    return hasIdToken && hasAccessToken;
  }
}
