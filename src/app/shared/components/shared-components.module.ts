import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// global used modules ... also used by components of next section
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// own components
import { AlertComponent } from './alert/alert.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    AlertComponent,
    HeaderbarComponent,
    SidebarComponent,
    FooterbarComponent,
    LayoutAdminComponent,
  ],
  exports: [
    AlertComponent,
    HeaderbarComponent,
    SidebarComponent,
    FooterbarComponent,
    LayoutAdminComponent,
  ]
})
export class SharedComponentsModule {
}
