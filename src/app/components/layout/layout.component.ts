import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, Routes } from '@angular/router';
import { faArrowLeft, faArrowRight, faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'platypus',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  title: string = '[title]';
  iconHome: IconDefinition = faHome;

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {
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
