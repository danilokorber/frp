import { APP_INITIALIZER, NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { AuthService } from '@services/auth.service';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [OAuthModule.forRoot()],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (initialAuthService: AuthService) => () => initialAuthService.initAuth(),
      deps: [AuthService],
      multi: true,
    },
  ],
})
export class AuthModule {}
