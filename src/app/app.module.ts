import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ZorroModule } from '@modules/zorro/zorro.module';
import { AuthModule } from '@modules/auth/auth.module';

import { ControlsModule } from '@controls/controls.module';
import { PagesModule } from '@pages/pages.module';
import { ServicesModule } from '@services/services.module';
import { ComponentsModule } from '@components/components.module';
import { DirectivesModule } from '@directives/directives.module';

import { RootComponent } from './root.component';
import { AuthGuard } from '@guards/auth.guard';

@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    PagesModule,
    ServicesModule,
    ComponentsModule,
    ControlsModule,
    DirectivesModule,
    FontAwesomeModule,
    ZorroModule,
    AuthModule,
  ],
  providers: [AuthGuard],
  bootstrap: [RootComponent],
})
export class AppModule {}
