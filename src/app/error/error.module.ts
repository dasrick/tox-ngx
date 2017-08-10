import { NgModule } from '@angular/core';

import { Status404Component } from './status-404.component';
import { Status500Component } from './status-500.component';

import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  imports: [ErrorRoutingModule],
  declarations: [
    Status404Component,
    Status500Component,
  ]
})
export class ErrorModule {
}
