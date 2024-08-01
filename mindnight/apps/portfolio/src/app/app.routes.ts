import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./curriculum/curriculum.component').then(m => m.CurriculumComponent)
    }
];
