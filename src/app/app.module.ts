import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './core/api.service';
import { BreadcrumbsComponent } from './core/breadcrumb/breadcrumb.component';

import { ConfigurationService } from './shared/configuration.service';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';

// Layouts
import { LayoutAdminComponent } from './core/layout-admin/layout-admin.component';
import { LayoutSimpleComponent } from './core/layout-simple/layout-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutSimpleComponent,
    BreadcrumbsComponent,
    NAV_DROPDOWN_DIRECTIVES,
    SIDEBAR_TOGGLE_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    ApiService,
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
