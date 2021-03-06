import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailAlertControl } from './layout/mail-alert.component';
import { ZorroModule } from '@modules/zorro/zorro.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotificationAlertControl } from './layout/notification-alert.component';

@NgModule({
  declarations: [MailAlertControl, NotificationAlertControl],
  imports: [CommonModule, FontAwesomeModule, ZorroModule],
  exports: [MailAlertControl, NotificationAlertControl],
})
export class ControlsModule {}
