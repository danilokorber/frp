import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { faHardHat, faHome, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

import { HomePage } from '@pages/home/home.component';
import { RanchoPage } from '@pages/rancho/rancho.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomePage, data: { title: 'Home', breadcrumb: 'Home', icon: faHome } },
  { path: 'Rancho', component: RanchoPage, data: { title: 'Rancho', breadcrumb: 'Rancho', icon: faHardHat } },
  { path: 'RanchoFinancas', component: RanchoPage, data: { title: 'Finanças', breadcrumb: 'Finanças', icon: faPiggyBank } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
