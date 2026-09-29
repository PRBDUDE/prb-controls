import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/color',
    pathMatch: 'full',
  },
  {
    path: 'controls',
    loadComponent: () => import('./feature/controls/controls').then((m) => m.Controls),
    title: 'Controls',
  },
  {
    path: 'color',
    loadComponent: () => import('./feature/color/color').then((m) => m.Color),
    title: 'Color Palette',
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
