import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
})
export class WorkareaComponent implements OnInit {
  isNewCardModalWindowActive: boolean;

  toggleNewCardModalWindow() {
    this.isNewCardModalWindowActive = !this.isNewCardModalWindowActive;
  }

  constructor() { }

  ngOnInit() {
    this.isNewCardModalWindowActive = false;
  }

}
