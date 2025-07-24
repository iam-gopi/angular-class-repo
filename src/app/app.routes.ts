import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './about/about';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
    pathMatch: 'full',
    canActivate: []
  },
  {
    path: 'about',
    component: About,
    title: 'About Page',
  },
];
