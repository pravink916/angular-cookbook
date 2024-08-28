import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FirstComponent } from './routing/first/first.component';
import { GuardComponent } from './routing/guard/guard.component';
import { myCanDeactivateGuard, myGuard } from './routing/my-guard.guard';
import { RoutingComponent } from './routing/routing.component';
import { SecondComponent } from './routing/second/second.component';
import { ThirdComponent } from './routing/third/third.component';

export const routes: Routes = [
  {
    path: 'routing',
    component: RoutingComponent,
    children: [
      { path: 'first', component: FirstComponent },
      { path: 'second', component: SecondComponent },
      { path: 'third', component: ThirdComponent },
      {
        path: 'fourth',
        loadComponent: () =>
          import('./routing/fourth-lazy/fourth-lazy.component').then(
            (m) => m.FourthLazyComponent
          ),
      },
      {
        path: 'guard',
        component: GuardComponent,
        canActivate: [myGuard],
        canDeactivate: [myCanDeactivateGuard],
      },
      {
        path: 'guardResolve',
        component: GuardComponent,
        resolve: { user: () => 'Sample Data' },
      },
      {
        path: 'guardMatch',
        component: GuardComponent,
        canMatch: [
          () => {
            return true;
          },
        ],
      },
      { path: 'guardMatch', component: SecondComponent },
      // Can Load is deprecated and hence there is no example.
    ],
  },
  {
    path: 'component',
    loadComponent: () =>
      import('./component-concept/component-concept.component').then(
        (m) => m.ComponentConceptComponent
      ),
  },
  {
    path: 'component-second',
    loadComponent: () =>
      import('./component-concept/second/second.component').then(
        (m) => m.ComponentSecondComponent
      ),
  },
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
