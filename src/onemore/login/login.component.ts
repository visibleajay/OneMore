
import { Component } from '@angular/core';

import { AuthService } from '../service/auth.service';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    user = {
        name: '',
        password: ''
    }
    constructor(public authService: AuthService) {}
}