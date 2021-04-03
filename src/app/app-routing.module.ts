import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { faBoxOpen, faHardHat, faHome, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

import { HomePage } from '@pages/home/home.component';
import { ProgressBarPage } from '@pages/template/progress-bar/progress-bar.component';
import { RanchoPage } from '@pages/rancho/rancho.component';
import { BoxPage } from '@pages/template/box/box.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePage, data: { title: 'Home', breadcrumb: 'Home', icon: faHome } },
  { path: 'Rancho', component: RanchoPage, data: { title: 'Rancho', breadcrumb: 'Rancho', icon: faHardHat } },
  { path: 'RanchoFinancas', component: RanchoPage, data: { title: 'Finanças', breadcrumb: 'Finanças', icon: faPiggyBank } },
  {
    path: 'Template',
    data: { title: 'Template', breadcrumb: 'Template', icon: faBoxOpen },
    children: [
      { path: 'Progress-Bar', component: ProgressBarPage, data: { title: 'Progress Bar', breadcrumb: 'Progress Bar' } },
      { path: 'Box', component: BoxPage, data: { title: 'Box', breadcrumb: 'Box' } },
      { path: '**', redirectTo: 'Progress-Bar' },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
