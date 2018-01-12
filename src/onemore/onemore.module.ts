import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OneMoreComponent } from './onemore.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';

import { AuthService } from './service/auth.service';

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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService],
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