import { Routes } from '@angular/router';
import { Landing } from './shared/components/landing/landing';
import { Register } from './shared/components/auth/register/register';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'register', component: Register }
];
