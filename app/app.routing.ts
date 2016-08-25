import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent }      from './heroes.component';

const appRoutes: Routes = [
    {
        path: 'heroes',
        component: 'HeroesComponent'
    },
    {
        path: 'dashboard',
        component: 'DashboardComponent'
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

// export configured router module for use in app.module
export const routing = RouterModule.forRoot(appRoutes);
