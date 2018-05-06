import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WorkareaComponent } from './components/workarea/workarea.component';
import { ModalWindowComponent } from './components/workarea/modal-window/modal-window.component';
import { NewCardFormComponent } from './components/workarea/new-card-form/new-card-form.component';
import { LabeledInputComponent } from './components/workarea/new-card-form/labeled-input/labeled-input.component';
import { LabeledSelectComponent } from './components/workarea/new-card-form/labeled-select/labeled-select.component';

@NgModule({
  declarations: [
    WorkareaComponent,
    ModalWindowComponent,
    NewCardFormComponent,
    LabeledInputComponent,
    LabeledSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    WorkareaComponent
  ]
})
export class WorkareaModule {
  constructor() {}
}
