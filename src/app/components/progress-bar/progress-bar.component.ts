import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: [],
})
export class ProgressBarComponent implements AfterViewInit {
  @Input() class: string[] = [];
  @Input() value: number = 0;
  @Input() label: HTMLElement;

  constructor() {}

  ngAfterViewInit(): void {
    this.value = this.value > 100 ? 100 : this.value;
  }
}
