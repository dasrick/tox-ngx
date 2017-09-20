import { Component, OnInit } from '@angular/core';

import { AlertService } from '../shared/alert/alert.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';  // ToDo recheck need

  // public status: { isopen: boolean } = { isopen: false };

  constructor(private alertService: AlertService) {
  }

  // public toggleDropdown($event:MouseEvent):void {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   this.status.isopen = !this.status.isopen;
  // }


  ngOnInit(): void {
    this.alertService.success('success');
    // this.alertService.info('info');
    // this.alertService.warning('warning');
    // this.alertService.danger('danger');
    // this.alertService.primary('primary');
    // this.alertService.secondary('secondary');
    // this.alertService.light('light');
    // this.alertService.dark('dark');
  }
}
