import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tox works!';

  @Input()
  public alerts: Array<IAlert> = [];

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');

    // combined version of translation setup and browser language detection
    translate.addLangs(['en', 'de']);
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');


    // alerts
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
