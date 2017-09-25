import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { LayoutAdminComponent } from './shared/components/layout-admin/layout-admin.component';
// import { LayoutSimpleComponent } from './shared/layouts/simple/simple.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'plong',
        loadChildren: './plong/plong.module#PlongModule'
      },
      // {
      //   path: 'offerassets',
      //   loadChildren: './offerassets/offerassets.module#OfferassetsModule'
      // },
      // {
      //   path: 'offersetups',
      //   loadChildren: './offersetups/offersetups.module#OffersetupsModule'
      // },
      // {
      //   path: 'offertemplates',
      //   loadChildren: './offertemplates/offertemplates.module#OffertemplatesModule'
      // },
      // {
      //   path: 'offerteasers',
      //   loadChildren: './offerteasers/offerteasers.module#OfferteasersModule'
      // },
    ]
  },
  // {
  //   path: '',
  //   component: LayoutSimpleComponent,
  //   children: [
  //     {
  //       path: 'error',
  //       loadChildren: './error/error.module#ErrorModule'
  //     },
  //   ]
  // },
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
