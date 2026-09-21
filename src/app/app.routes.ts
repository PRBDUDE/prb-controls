import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/controls/controls').then((m) => m.Controls),
    title: 'Home',
  },
  {
    path: 'path-not-found',
    loadComponent: () => import('./core/path-not-found/path-not-found').then((m) => m.PathNotFound),
    title: 'Path not found',
  },
  {
    path: '**',
    redirectTo: '/path-not-found',
    pathMatch: 'full',
  }
];
