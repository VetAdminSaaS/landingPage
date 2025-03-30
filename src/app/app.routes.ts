import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch:'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/landing.routes').then(m=> m.landingRoutes),
    }

];
