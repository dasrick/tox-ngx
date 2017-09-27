import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tox works!';

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // translate.use('en');

    // combined version of translation setup and browser language detection
    // translate.addLangs(['en', 'de']);
    // const browserLang: string = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }

}
