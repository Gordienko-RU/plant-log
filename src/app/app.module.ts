import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WorkareaModule } from './workarea.module';
import { NavigationModule } from './navigation.module'
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createEpicMiddleware } from 'redux-observable';

import { AppComponent } from './components/app.component';

import rootReducer from './redux/reducers';
import rootEpic from './redux/epics';
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
    const middlewares = [];
    const enhancers = [];

    const epicMiddleware = createEpicMiddleware(rootEpic);
    middlewares.push(epicMiddleware);

    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    };
    ngRedux.configureStore(rootReducer, initialState, middlewares, enhancers);
  }
}
