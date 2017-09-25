import { Component, OnInit } from '@angular/core';

import { AlertService } from '../shared/services/alert.service';

@Component({
  templateUrl: 'plong.component.html'
})
export class PlongComponent implements OnInit {

  title = 'Plong';  // ToDo recheck need

  // public status: { isopen: boolean } = { isopen: false };

  constructor(private alertService: AlertService) {
  }

  // public toggleDropdown($event:MouseEvent):void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }


  ngOnInit(): void {
    this.alertService.danger('danger');
    // this.alertService.info('info');
    // this.alertService.warning('warning');
    // this.alertService.danger('danger');
    // this.alertService.primary('primary');
    // this.alertService.secondary('secondary');
    // this.alertService.light('light');
    // this.alertService.dark('dark');
  }
}
