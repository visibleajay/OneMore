
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { IUserInfo } from '../core/onemore.state';

import { select } from '@angular-redux/store';

@Component({
    templateUrl: './form.component.html'
})
export class FormComponent {
    @select('userInfo') user$: Observable<IUserInfo>;
}