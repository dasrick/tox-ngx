import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    DashboardRoutingModule,
    NgbModule,
    TranslateModule,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
