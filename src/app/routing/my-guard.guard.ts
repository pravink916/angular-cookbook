import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { routes } from '../app.routes';
import { FirstComponent } from './first/first.component';

export const myGuard: CanActivateFn = (route, state) => {
  console.log("coming inside the guard")
  return true;
};

export const myCanDeactivateGuard: CanDeactivateFn<FirstComponent> = () => {
  return confirm('Are you sure you want to leave the page?')
}
