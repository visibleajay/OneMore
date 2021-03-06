import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OneMoreComponent } from './onemore.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

import { MatInputModule, 
         MatFormFieldModule, 
         MatButtonModule, 
         MatSelectModule } from '@angular/material';

import { AuthService } from './service/auth.service';
import { OneMoreActions } from './core/onemore.actions';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { INITIAL_STATE, IOneMoreState, rootReducer } from './core/onemore.state';

import { ROUTES } from './onemore.constant';

@NgModule({
  declarations: [
    OneMoreComponent,
    LoginComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgReduxModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [AuthService, OneMoreActions],
  bootstrap: [OneMoreComponent]
})
export class OneMoreModule {
  constructor(ngRedux: NgRedux<IOneMoreState>,
              devTools: DevToolsExtension) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        [],
        storeEnhancers
    );
  }
}
