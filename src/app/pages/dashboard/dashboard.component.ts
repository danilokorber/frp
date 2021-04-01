import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'platypus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardPage implements OnInit {
  title: string = '[title]';

  public constructor(private activatedRoute: ActivatedRoute) {
    const data: Data = this.activatedRoute.snapshot.data;
    this.title = this.getTitle(this.activatedRoute);
  }

  getTitle(ar: ActivatedRoute): string {
    if (ar && ar.children && ar.children.length > 0) {
      return this.getTitle(ar.children[0]);
    } else {
      return JSON.parse(JSON.stringify(ar.data))._value['title'];
    }
  }

  ngOnInit(): void {}
}
