import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';

import { AlertService } from './alert/alert.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AlertService,
    ApiService,
  ]
})
export class SharedModule {
}
