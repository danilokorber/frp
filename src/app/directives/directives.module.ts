import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoFocusDirective } from './auto-focus.directive';
import { BoxSuccessDirective } from './box-success.directive';
import { BoxWarningDirective } from './box-warning.directive';
import { BoxErrorDirective } from './box-error.directive';
import { BoxInfoDirective } from './box-info.directive';
import { BoxCollapsableDirective } from './box-collapsable.directive';
import { GridDirective } from './grid.directive';
import { GridColsDirective } from './grid-cols.directive';
import { GridGapDirective } from './grid-gap.directive';
import { ProgressBarSuccessDirective } from './progress-bar-success.directive';
import { ProgressBarErrorDirective } from './progress-bar-error.directive';
import { ProgressBarWarningDirective } from './progress-bar-warning.directive';
import { ProgressBarInfoDirective } from './progress-bar-info.directive';

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
    BoxCollapsableDirective,
    ProgressBarSuccessDirective,
    ProgressBarErrorDirective,
    ProgressBarWarningDirective,
    ProgressBarInfoDirective,
  ],
  imports: [CommonModule],
  exports: [
    AutoFocusDirective,
    BoxSuccessDirective,
    BoxWarningDirective,
    BoxErrorDirective,
    BoxInfoDirective,
    BoxCollapsableDirective,
    GridDirective,
    GridColsDirective,
    GridGapDirective,
    ProgressBarSuccessDirective,
    ProgressBarErrorDirective,
    ProgressBarWarningDirective,
    ProgressBarInfoDirective,
  ],
})
export class DirectivesModule {}
