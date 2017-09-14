import { Component, Input } from '@angular/core';

@Component({
  selector: 'tox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tox works!';

  @Input()
  public alerts: Array<IAlert> = [];

  constructor() {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info alert',
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning alert',
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert',
    }, {
      id: 5,
      type: 'primary',
      message: 'This is a primary alert',
    }, {
      id: 6,
      type: 'secondary',
      message: 'This is a secondary alert',
    }, {
      id: 7,
      type: 'light',
      message: 'This is a light alert',
    }, {
      id: 8,
      type: 'dark',
      message: 'This is a dark alert',
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
