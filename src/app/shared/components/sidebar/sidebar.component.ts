import { Component, OnInit } from '@angular/core';

// routing for -----
export interface RouteInfo {
  path: string;
  title: string;
  iconClass: string;
}

// duplicates to routing configs ... i know
export const ROUTES: RouteInfo[] = [
  {path: '/dashboard', title: 'Dashboard', iconClass: 'fa fa-tachometer'},
  {path: '/plong', title: 'Plong', iconClass: 'fa fa-tachometer'},
  // {path: '/offerteasers', title: 'Teasers', iconClass: 'fa fa-gift'},
  // {path: '/offerassets', title: 'Assets', iconClass: 'fa fa-image'},
  // {path: '/offersetups', title: 'Setups', iconClass: 'fa fa-cog'},
  // {path: '/offertemplates', title: 'Templates', iconClass: 'fa fa-file-code-o'},
];

export interface SidebarItemTypes {
  type: 'headline' | 'menu';
  data?: string;
}

// routing for -----

@Component({
  selector: 'tox-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
