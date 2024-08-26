import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FirstComponent } from './routing/first/first.component';
import { RoutingComponent } from './routing/routing.component';

export const routes: Routes = [
    {path: 'routing', component: RoutingComponent},
    {path: 'home', component: MainComponent},
    {path: '', component: MainComponent}
];
