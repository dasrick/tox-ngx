import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LayoutAdminComponent } from './core/layout-admin/layout-admin.component';
import { LayoutSimpleComponent } from './core/layout-simple/layout-simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutAdminComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'offersetups',
        loadChildren: './offersetups/offersetups.module#OffersetupsModule'
      },
    ]
  },
  {
    path: '',
    component: LayoutSimpleComponent,
    // data: {
    //   title: 'Error'
    // },
    children: [
      {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      },
    ]
  },
  {path : '**', redirectTo : 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
