import { NgModule } from '@angular/core';

import { SharedLazyModule } from '../shared/shared-lazy.module';

import { PlongComponent } from './plong.component';
import { PlongRoutingModule } from './plong-routing.module';

@NgModule({
  imports: [
    SharedLazyModule,
    PlongRoutingModule,
  ],
  declarations: [PlongComponent]
})
export class PlongModule {
}
