import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZorroModule } from '@modules/zorro/zorro.module';

import { ControlsModule } from '@controls/controls.module';

import { PlatypusLayoutComponent } from './layout/platypus/platypus.component';
import { HeaderComponent } from './layout/platypus/header/header.component';
import { SidebarComponent } from './layout/platypus/sidebar/sidebar.component';
import { MenuComponent } from './layout/platypus/sidebar/menu.component';
import { MenuItemComponent } from './layout/platypus/sidebar/menu-item.component';
import { BodyComponent } from './layout/platypus/body/body.component';

import { BoxComponent } from './box/box.component';
import { BoxHeaderComponent } from './box/box-header.component';
import { BoxFooterComponent } from './box/box-footer.component';

import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CodeBlockComponent } from './code-block/code-block.component';
import { AccountComponent } from './account/account.component';
import { MailThreadComponent } from './mail/thread.component';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [
    MenuItemComponent,
    BoxComponent,
    BoxHeaderComponent,
    BoxFooterComponent,
    ProgressBarComponent,
    SidebarComponent,
    PlatypusLayoutComponent,
    HeaderComponent,
    BodyComponent,
    CodeBlockComponent,
    MenuComponent,
    AccountComponent,
    MailThreadComponent,
  ],
  imports: [CommonModule, RouterModule, FontAwesomeModule, ZorroModule, ControlsModule, PipesModule],
  exports: [
    PlatypusLayoutComponent,
    BoxComponent,
    BoxHeaderComponent,
    BoxFooterComponent,
    ProgressBarComponent,
    CodeBlockComponent,
    MailThreadComponent,
  ],
  providers: [],
})
export class ComponentsModule {}
