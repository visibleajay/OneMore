
import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

export const ROUTES: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
}, {
    path: 'login',
    component: LoginComponent
}, {
    path: 'form',
    component: FormComponent
}];
