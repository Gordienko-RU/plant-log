import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { WorkareaComponent } from './workarea/workarea.component';
import { NewCardTemplateComponent } from './new-card-template/new-card-template.component';
import { AddNewPlantButtonComponent } from './workarea/add-new-plant-button/add-new-plant-button.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    WorkareaComponent,
    NewCardTemplateComponent,
    AddNewPlantButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
