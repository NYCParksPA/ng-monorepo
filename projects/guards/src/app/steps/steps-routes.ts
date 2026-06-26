import { Routes } from '@angular/router';
import { stepsCanDeactivateGuard, stepsCanDeactivateGuard2 } from '../_guards/steps.guard';

export const STEPS_ROUTES: Routes = [
    {
        path:'step-1', loadComponent: () => import('./step-1/step-1.component').then( c => c.Step1Component),
        canDeactivate: [stepsCanDeactivateGuard, stepsCanDeactivateGuard2]
    },
    {
        path:'step-2', loadComponent: () => import('./step-2/step-2.component').then( c => c.Step2Component),
        canDeactivate: [stepsCanDeactivateGuard]
    },
    {
        path:'step-3', loadComponent: () => import('./step-3/step-3.component').then( c => c.Step3Component),
        canDeactivate: [stepsCanDeactivateGuard]
    },
    {
        path:'', redirectTo:'step-1', pathMatch:'full'
    }
];
