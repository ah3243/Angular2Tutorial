import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }     from './hero-detail.component'

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    // :id indicates a placeholder to be replaced
    path: 'detail/:id',
    component: HeroDetailComponent

  }
];


export const routing = RouterModule.forRoot(appRoutes);

