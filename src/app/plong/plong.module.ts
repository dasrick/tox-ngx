import { NgModule } from '@angular/core';

import { PlongComponent } from './plong.component';
import { PlongRoutingModule } from './plong-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    PlongRoutingModule,
    NgbModule,
    TranslateModule,
  ],
  declarations: [PlongComponent]
})
export class PlongModule {
}
