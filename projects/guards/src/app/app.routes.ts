import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, title:'Home Page'
    },
    {
        path:'steps', loadChildren: () => import('./steps/steps-routes').then( r => r.STEPS_ROUTES)
    },
    {
        path: '**', redirectTo:'', pathMatch:'full'
    }
];
