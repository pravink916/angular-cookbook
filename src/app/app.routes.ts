import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './routing/first/first.component';
import { RoutingComponent } from './routing/routing.component';
import { SecondComponent } from './routing/second/second.component';
import { ThirdComponent } from './routing/third/third.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FourthLazyComponent } from './routing/fourth-lazy/fourth-lazy.component';


export const routes: Routes = [
    {path: 'routing', component: RoutingComponent, 
        children: [
            {path:'first', component: FirstComponent},
            {path:'second', component: SecondComponent},
            {path: 'third', component: ThirdComponent},
            {path: 'fourth',    loadComponent: () =>
                import('./routing/fourth-lazy/fourth-lazy.component').then(
                  (m) => m.FourthLazyComponent
                ),},
                
            
        ]
    },
    {path: 'home', component: MainComponent},
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path:'\*\*', component: PageNotFoundComponent}
];
