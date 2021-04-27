import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZorroModule } from '@modules/zorro/zorro.module';

import { ComponentsModule } from '@components/components.module';

import { DirectivesModule } from '@directives/directives.module';

import { HomePage } from './home/home.component';
import { DashboardPage } from './dashboard/dashboard.component';
import { RanchoPage } from './rancho/rancho.component';
import { ProgressBarPage } from './template/progress-bar/progress-bar.component';
import { BoxPage } from './template/box/box.component';
import { LoginPage } from './login/login.component';
import { LoginFinishPage } from './login-finish/login-finish.component';
import { MailPage } from './mail/mail.component';
import { ProjectsPage } from './projects/projects.page';

@NgModule({
  declarations: [HomePage, DashboardPage, RanchoPage, ProgressBarPage, BoxPage, LoginPage, LoginFinishPage, MailPage, ProjectsPage],
  imports: [CommonModule, RouterModule, ComponentsModule, DirectivesModule, FontAwesomeModule, ZorroModule],
  exports: [HomePage, DashboardPage, ProjectsPage, ProgressBarPage, BoxPage],
})
export class PagesModule {}
