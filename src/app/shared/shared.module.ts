import { NgModule } from '@angular/core';

import { ApiService } from './services/api.service';

import { AlertService } from './alert/alert.service';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';

@NgModule({
  imports: [],
  declarations: [
    HeaderbarComponent,
    SidebarComponent,
    FooterbarComponent,
  ],
  exports: [
    HeaderbarComponent,
    SidebarComponent,
    FooterbarComponent,
  ],
  providers: [
    AlertService,
    ApiService,
  ]
})
export class SharedModule {
}
