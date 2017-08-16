import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';

import { OffersetupListComponent } from './offersetup-list/offersetup-list.component';
import { OffersetupFormComponent } from './offersetup-form/offersetup-form.component';

import { OffersetupsRouting } from './offersetups.routing';
import { OffersetupsService } from './offersetups.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,

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
