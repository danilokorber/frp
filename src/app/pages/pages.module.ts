import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePage } from './home/home.component';
import { ComponentsModule } from '@components/components.module';
import { DashboardPage } from './dashboard/dashboard.component';
import { RanchoPage } from './rancho/rancho.component';
import { ZorroModule } from '@modules/zorro/zorro.module';
import { DirectivesModule } from '@directives/directives.module';

@NgModule({
  declarations: [HomePage, DashboardPage, RanchoPage],
  imports: [CommonModule, RouterModule, ComponentsModule, DirectivesModule, ZorroModule],
  exports: [HomePage, DashboardPage],
})
export class PagesModule {}
