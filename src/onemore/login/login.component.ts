
import { Component } from '@angular/core';

import { AuthService } from '../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    
    loginForm: FormGroup;

    constructor(
                    public authService: AuthService,
                    private formBuilder: FormBuilder
                ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name: [ '', Validators.required],
            password: ['' , Validators.required]
        });
    }
}