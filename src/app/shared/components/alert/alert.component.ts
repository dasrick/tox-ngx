import { Component, OnInit } from '@angular/core';

import { Alert } from '../../models/alert.model';
import { AlertService } from '../../services/alert.service';

// import { debounceTime } from 'rxjs/operator/debounceTime';

@Component({
  moduleId: module.id,
  selector: 'tox-alert',
  templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
  alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.alerts = [];
        return;
      }

      // add alert to array
      this.alerts.push(alert);
      // debounceTime.call(alert, 5000).subscribe(() => {
      //   console.log('all lal la');
      // });
    });


  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
