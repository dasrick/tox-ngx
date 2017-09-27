import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared components/pipes/services structure ... https://github.com/housseindjirdeh/angular2-hn
// lazy shared structure ... https://github.com/ngx-translate/core/issues/209
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './shared/services/services.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';

// shared pipes module

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    ServicesModule.forRoot(),
    SharedComponentsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
