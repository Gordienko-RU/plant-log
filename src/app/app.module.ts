import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkareaModule } from './workarea.module';
import { NavigationModule } from './navigation.module'
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './components/app.component';

import rootReducer from './redux/reducers';
import { IAppState, initialState } from './redux';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WorkareaModule,
    NavigationModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension
  ) {
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    };
    ngRedux.configureStore(rootReducer, initialState, [], enhancers);
  }
}
