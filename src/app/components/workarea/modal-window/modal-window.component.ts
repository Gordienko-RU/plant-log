import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-window',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
