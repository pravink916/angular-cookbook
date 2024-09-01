import { Routes } from '@angular/router';
import { OutletMainComponent } from './component-concept/component-outlet/outlet-main.component';
import { LifecycleComponent } from './component-concept/lifecycle/lifecycle/lifecycle.component';
import { PipeMainComponent } from './component-concept/pipes/pipe-main.component';
import { CustomCard } from './component-concept/view-child/view-child-concept';
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
    path: 'component-concept',
    loadComponent: () =>
      import('./component-concept/component-concept.component').then(
        (m) => m.ComponentConceptComponent
      ),
  },
  {
    path: 'component-concept/input-output',
    loadComponent: () =>
      import(
        './component-concept/input-output/input-output-main/input-output-main.component'
      ).then((m) => m.InputOutputMainComponent),
  },
  {
    path: 'component-concept/content',
    loadComponent: () =>
      import(
        './component-concept/content/content-example/content-example.component'
      ).then((m) => m.ContentExampleComponent),
  },
  {
    path: 'input-output-component',
    loadComponent: () =>
      import(
        './component-concept/input-output/input-output-main/input-output-main.component'
      ).then((m) => m.InputOutputMainComponent),
  },
  {
    path: 'component-concept/lifecycle',
    component: LifecycleComponent,
  },
  { path: 'component-concept/view-child', component: CustomCard },
  { path: 'component-concept/outlet', component: OutletMainComponent },
  { path: 'component-concept/pipe', component: PipeMainComponent },
  {
    path: 'component-second',
    loadComponent: () =>
      import('./component-concept/input-output/second/second.component').then(
        (m) => m.ComponentSecondComponent
      ),
  },
  { path: 'home', component: MainComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
