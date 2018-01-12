import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { OneMoreComponent } from './onemore.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

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
    NgReduxModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
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
