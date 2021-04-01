import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './auto-focus.directive';
import { BoxSuccessDirective } from './box-success.directive';
import { BoxWarningDirective } from './box-warning.directive';
import { BoxErrorDirective } from './box-error.directive';
import { BoxInfoDirective } from './box-info.directive';
import { GridDirective } from './grid.directive';
import { GridColsDirective } from './grid-cols.directive';
import { GridGapDirective } from './grid-gap.directive';

@NgModule({
  declarations: [
    AutoFocusDirective,
    BoxSuccessDirective,
    BoxWarningDirective,
    BoxErrorDirective,
    BoxInfoDirective,
    GridDirective,
    GridColsDirective,
    GridGapDirective,
  ],
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    BoxSuccessDirective,
    BoxWarningDirective,
    BoxErrorDirective,
    BoxInfoDirective,
    GridDirective,
    GridColsDirective,
    GridGapDirective,
  ],
})
export class DirectivesModule {}
