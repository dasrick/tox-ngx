import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';

import { AlertService } from './alert/alert.service';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [],
  declarations: [
    HeaderbarComponent,
    SidebarComponent,
  ],
  exports: [
    HeaderbarComponent,
    SidebarComponent,
  ],
  providers: [
    AlertService,
    ApiService,
  ]
})
export class SharedModule {
}
