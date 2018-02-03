
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { IUserInfo } from '../core/onemore.state';

import { NgRedux } from '@angular-redux/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './form.component.html'
})
export class FormComponent {

	userInfoForm: FormGroup;
	// @select('userInfo') user$: Observable<IUserInfo>;
	constructor(
			public formBuilder: FormBuilder,
			private ngRedux: NgRedux<IUserInfo>
		) {}
	
	ngOnInit() {
		this.updateForm({} as IUserInfo);
		this.ngRedux.subscribe(() => this.updateForm(this.ngRedux.getState()['userInfo']));
	}

	private updateForm(userInfo: IUserInfo){
		console.log(userInfo);
		if ( Object.keys(userInfo).length ) {
			this.userInfoForm = this.formBuilder.group({
				name: [userInfo.name || '', Validators.required],
				email: [ userInfo.email || '', [Validators.required, Validators.email]],
				dateOfBirth: [ '', Validators.required],
				description: [ '', Validators.required],
				gender: [userInfo.gender || '', Validators.required]
			});
		} else if ( this.userInfoForm.invalid ) {
			this.userInfoForm = this.formBuilder.group({
				name: [ '', Validators.required],
				email: [ '', [Validators.required, Validators.email]],
				dateOfBirth: [ '', Validators.required],
				description: [ '', Validators.required],
				gender: [ '', Validators.required]
			});
		}
	}
}