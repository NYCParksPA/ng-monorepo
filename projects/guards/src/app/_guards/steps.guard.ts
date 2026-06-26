import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export const stepsGuard: CanActivateFn = (route, state) => {
  return true;
};

export interface CanComponentDeactivateSteps {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export const stepsCanDeactivateGuard: CanDeactivateFn<CanComponentDeactivateSteps> = (component: CanComponentDeactivateSteps) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};

export const stepsCanDeactivateGuard2: CanDeactivateFn<CanComponentDeactivateSteps> = (
  component: CanComponentDeactivateSteps,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot,
) => {
  console.log({currentRoute});
  console.log(currentState);
  console.log({nextState});
  return component.canDeactivate ? component.canDeactivate() : true;
}; 