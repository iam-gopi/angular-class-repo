import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Home } from './home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: About,
    title: 'About Page',
    canActivate: [authGuard],
    pathMatch: 'full',
  },
];
