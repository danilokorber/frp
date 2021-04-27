import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { faBoxOpen, faEnvelope, faHardHat, faHome, faPiggyBank, faSignal, faToolbox } from '@fortawesome/free-solid-svg-icons';

import { HomePage } from '@pages/home/home.component';
import { ProgressBarPage } from '@pages/template/progress-bar/progress-bar.component';
import { RanchoPage } from '@pages/rancho/rancho.component';
import { BoxPage } from '@pages/template/box/box.component';
import { LoginPage } from '@pages/login/login.component';
import { AuthGuard } from '@guards/auth.guard';
import { LoginFinishPage } from '@pages/login-finish/login-finish.component';
import { MailPage } from '@pages/mail/mail.component';
import { ProjectsPage } from '@pages/projects/projects.page';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePage, canActivate: [AuthGuard], data: { title: 'Home', breadcrumb: 'Home', icon: faHome } },
  { path: 'Mail', component: MailPage, canActivate: [AuthGuard], data: { title: 'Mail', breadcrumb: 'Mail', icon: faEnvelope } },
  { path: 'Rancho', component: ProjectsPage, canActivate: [AuthGuard], data: { title: 'Projetos', breadcrumb: 'Projetos', icon: faHardHat } },
  { path: 'RanchoFinancas', component: RanchoPage, canActivate: [AuthGuard], data: { title: 'Finanças', breadcrumb: 'Finanças', icon: faPiggyBank } },
  {
    path: 'Template',
    data: { title: 'Template', breadcrumb: 'Template', icon: faToolbox },
    children: [
      { path: 'Progress-Bar', component: ProgressBarPage, data: { title: 'Progress Bar', breadcrumb: 'Progress Bar', icon: faSignal } },
      { path: 'Box', component: BoxPage, data: { title: 'Box', breadcrumb: 'Box', icon: faBoxOpen } },
      { path: '**', redirectTo: 'Progress-Bar' },
    ],
  },
  { path: 'Login', component: LoginPage },
  { path: 'Login-Success', component: LoginFinishPage, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'Login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
