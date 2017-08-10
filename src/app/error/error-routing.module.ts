import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Status404Component } from './status-404.component';
import { Status500Component } from './status-500.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Error Pages'
    },
    children: [
      {
        path: '404',
        component: Status404Component,
        data: {
          title: 'Page 404'
        }
      },
      {
        path: '500',
        component: Status500Component,
        data: {
          title: 'Page 500'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
}
