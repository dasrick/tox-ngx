import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';

// import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';

@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpModule,
    // RouterModule
  ],
  declarations: [
    // AlertComponent,
  ],
  exports: [
    // AlertComponent,
  ],
  providers: [
    AlertService,
    ApiService,
  ]
})
export class SharedModule {
}
