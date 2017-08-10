import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BreadcrumbsComponent } from './core/breadcrumb/breadcrumb.component';

// Layouts
import { LayoutAdminComponent } from './core/layout-admin/layout-admin.component';
import { LayoutSimpleComponent } from './core/layout-simple/layout-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
    LayoutSimpleComponent,
    BreadcrumbsComponent
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
