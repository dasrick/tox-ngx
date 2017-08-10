import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tox-layout-admin',
  templateUrl: './layout-admin.component.html'
})
export class LayoutAdminComponent implements OnInit {

  public disabled = false;
  public status: { isopen: boolean } = {isopen: false};

  constructor() {
  }

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit(): void {
  }
}
