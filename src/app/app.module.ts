import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlantsListComponent } from './plants-list/plants-list.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { NewCardTemplateComponent } from './new-card-template/new-card-template.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantsListComponent,
    PlantCardComponent,
    NewCardTemplateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
