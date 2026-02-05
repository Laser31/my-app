import { Routes } from '@angular/router';
import { Login } from './comps/login/login';
import { AboutsComponent } from './comps/abouts/abouts.component';
import { HomeComponent } from './comps/home/home.component';


export const routes: Routes = [
    {
        path: 'Login',
        component: Login,
    },
    {
        path: 'About',
        component: AboutsComponent,
    },
    {
        path: 'Home',
        component: HomeComponent,
    }
];
