import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule {
  constructor() {}
}
