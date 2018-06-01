import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardViewComponent } from './components/workarea/card-view/card-view.component';

const routes: Routes = [
  { path: 'cards/:id', component: CardViewComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
