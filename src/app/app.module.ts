import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { NewCardTemplateComponent } from './new-card-template/new-card-template.component';
import { AddNewPlantButtonComponent } from './workarea/add-new-plant-button/add-new-plant-button.component';
import { LabeledFormElementComponent } from './new-card-template/labeled-form-element/labeled-form-element.component';

import rootReducer from './redux/reducers';
import { PlantLogState } from './redux';

@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    WorkareaComponent,
    NewCardTemplateComponent,
    AddNewPlantButtonComponent,
    LabeledFormElementComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    ngRedux: NgRedux<PlantLogState>,
    devTools: DevToolsExtension
  ) {
    let enhancers = [];
    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    };
    ngRedux.configureStore(rootReducer, {}, [], enhancers);
  }
}
