import { NgModule } from '@angular/core';

import { AlertService } from './alert.service';
import { ApiService } from './api.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: []
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [
        AlertService,
        ApiService,
      ]
    }
  }
}


export {
  AlertService,
  ApiService,
}
