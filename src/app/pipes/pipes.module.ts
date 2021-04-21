import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { MailMePipe } from './mail-me.pipe';

@NgModule({
  declarations: [SafePipe, MailMePipe],
  imports: [CommonModule],
  exports: [SafePipe, MailMePipe],
})
export class PipesModule {}
