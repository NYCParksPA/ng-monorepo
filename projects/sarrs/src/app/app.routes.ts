import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'sarrs', loadChildren: () => import('./sarrs/sarrs.routes').then( m => m.SarrsRoutes )
    }
];
