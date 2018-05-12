import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkareaComponent } from './components/workarea/workarea.component';
import { ModalWindowComponent } from './components/workarea/modal-window/modal-window.component';
import { NewCardFormComponent } from './components/workarea/new-card-form/new-card-form.component';

@NgModule({
  declarations: [
    WorkareaComponent,
    ModalWindowComponent,
    NewCardFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    WorkareaComponent
  ]
})
export class WorkareaModule {
  constructor() {}
}
