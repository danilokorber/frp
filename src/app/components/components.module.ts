import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZorroModule } from '@modules/zorro/zorro.module';

import { ControlsModule } from '@controls/controls.module';

import { LayoutComponent } from './layout/layout.component';
import { MenuItemComponent } from './layout/menu-item.component';

import { BoxComponent } from './box/box.component';
import { BoxHeaderComponent } from './box/box-header.component';
import { BoxFooterComponent } from './box/box-footer.component';

@NgModule({
  declarations: [LayoutComponent, MenuItemComponent, BoxComponent, BoxHeaderComponent, BoxFooterComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ZorroModule, ControlsModule],
  exports: [LayoutComponent, BoxComponent, BoxHeaderComponent, BoxFooterComponent],
})
export class ComponentsModule {}
