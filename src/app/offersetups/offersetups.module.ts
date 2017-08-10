import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

// import { CdkTableModule } from '@angular/cdk';

// import {MaterialComponentsModule} from '../material-components.module';

import {OffersetupListComponent} from './offersetup-list/offersetup-list.component';
import {OffersetupFormComponent} from './offersetup-form/offersetup-form.component';

import {OffersetupsRouting  } from './offersetups.routing';
import {OffersetupsService} from './offersetups.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,

    // CdkTableModule,

    // MaterialComponentsModule,
    OffersetupsRouting
  ],
  declarations: [
    OffersetupListComponent,
    OffersetupFormComponent
  ],
  providers: [
    OffersetupsService
  ]
})
export class OffersetupsModule {
}
