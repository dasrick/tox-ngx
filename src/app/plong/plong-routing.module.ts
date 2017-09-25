import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlongComponent } from './plong.component';

const routes: Routes = [
  {
    path: '',
    component: PlongComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlongRoutingModule {
}
