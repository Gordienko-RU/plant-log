import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [RouterModule, BrowserModule],
  exports: [NavigationComponent]
})
export class NavigationModule {
  constructor() {}
}
