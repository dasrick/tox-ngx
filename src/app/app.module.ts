import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// shared services module
import { ServicesModule } from './shared/services/services.module';
// shared components module
import { SharedComponentsModule } from './shared/components/shared-components.module';
// shared pipes module

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    SharedComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
