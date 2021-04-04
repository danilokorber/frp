import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { IconDefinition, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'platypus-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  title: string = '[title]';
  iconHome: IconDefinition = faHome;

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
