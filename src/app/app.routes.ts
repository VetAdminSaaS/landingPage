import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home', redirectTo: '', pathMatch:'full'
    },
    {
        path: '',
        loadChildren: () => import('./pages/landing.routes').then(m=> m.landingRoutes),
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/authentication/authentication.routes').then(m=> m.authenticationRoutes),
    }

];
