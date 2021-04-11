import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'platypus-login-finish',
  templateUrl: './login-finish.component.html',
  styles: [
    `
      .blob {
        border-radius: 50%;
        width: 256px;
        height: 256px;

        box-shadow: 0 0 0 0 rgba(255, 163, 1, 1);
        transform: scale(1);
        animation: pulse 2s infinite;
      }

      @keyframes pulse {
        0% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(255, 163, 1, 0.7);
        }

        70% {
          transform: scale(1);
          box-shadow: 0 0 0 10px rgba(255, 163, 1, 0);
        }

        100% {
          transform: scale(0.95);
          box-shadow: 0 0 0 0 rgba(255, 163, 1, 0);
        }
      }
    `,
  ],
})
export class LoginFinishPage implements AfterViewInit {
  token: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngAfterViewInit(): void {
    this.token = this.authService.getToken();

    sessionStorage.setItem('locale', this.token.locale);
    sessionStorage.setItem('domains', this.token.groups);

    if (this.token.groups.length == 1) {
      sessionStorage.setItem('currentDomain', this.token.groups[0]);
      this.router.navigate(['/Home']);
    }

    console.log(new Date());
  }
}
