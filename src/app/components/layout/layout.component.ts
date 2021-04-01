import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, Routes } from '@angular/router';
import { faHome, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'platypus',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  title: string = '[title]';
  routes: Routes = [];
  leftMenuItems: Routes = [];
  iconHome: IconDefinition = faHome;

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const data: Data = this.activatedRoute.snapshot.data;
    this.title = this.getTitle(this.activatedRoute);
    this.routes = router.config;

    this.leftMenuItems = router.config.filter((r) => r.data && r.data.icon);
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
