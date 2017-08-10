import { Routes, RouterModule } from '@angular/router';

import { OffersetupListComponent } from './offersetup-list/offersetup-list.component';
import { OffersetupFormComponent } from './offersetup-form/offersetup-form.component';

const offersetupsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Offersetups'
    },
    children: [
      {
        path: '',
        data: {
          title: 'List'
        },
        component: OffersetupListComponent,
        pathMatch: 'full'
      },
      {
        path: 'new',
        data: {
          title: 'New'
        },
        component: OffersetupFormComponent
      },
      {
        path: ':id',
        data: {
          title: 'Details'
        },
        component: OffersetupFormComponent
      }
    ]
  },
];

export const OffersetupsRouting = RouterModule.forChild(offersetupsRoutes);
