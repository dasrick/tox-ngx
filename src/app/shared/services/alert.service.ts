import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// import { debounceTime } from 'rxjs/operator/debounceTime';

import { Alert } from '../models/alert.model';

@Injectable()
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  alert(type: string, message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<Alert>{type: type, message: message});

    // debounceTime.call(this.subject, 5000).subscribe(() => {
    //   console.log('hui buh');
    // });
  }

  clear() {
    // clear alerts
    this.subject.next();
  }

  // ==============================================================================================================================

  success(message: string, keepAfterRouteChange = false) {
    this.alert('success', message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.alert('info', message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange = false) {
    this.alert('warning', message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange = false) {
    this.alert('danger', message, keepAfterRouteChange);
  }

  primary(message: string, keepAfterRouteChange = false) {
    this.alert('primary', message, keepAfterRouteChange);
  }

  secondary(message: string, keepAfterRouteChange = false) {
    this.alert('secondary', message, keepAfterRouteChange);
  }

  light(message: string, keepAfterRouteChange = false) {
    this.alert('light', message, keepAfterRouteChange);
  }

  dark(message: string, keepAfterRouteChange = false) {
    this.alert('dark', message, keepAfterRouteChange);
  }


}
