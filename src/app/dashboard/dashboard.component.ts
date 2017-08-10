import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  // public status: { isopen: boolean } = { isopen: false };

  constructor( ) { }

  // public toggleDropdown($event:MouseEvent):void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }


  ngOnInit(): void {
  }
}
