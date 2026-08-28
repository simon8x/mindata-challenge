import { Routes } from '@angular/router';
import { UiKitComponent } from './pages/ui-kit/ui-kit.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'ui-kit',
        component: UiKitComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];
