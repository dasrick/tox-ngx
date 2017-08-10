import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'tox-breadcrumbs',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Array<Object>;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      this.breadcrumbs = [];
      let currentRoute = this.route.root,
        url = '';
      do {
        const childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
          if (route.outlet === 'primary') {
            const routeSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
            this.breadcrumbs.push({
              label: route.snapshot.data,
              url: url
            });
            currentRoute = route;
          }
        });
      } while (currentRoute);
    });
  }
}
