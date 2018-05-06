import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { inputs, selects } from './fields-source';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss']
})
export class NewCardFormComponent implements OnInit {
  inputs = inputs;
  selects = selects;
  @Output() closeModalWindow = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeModalWindow.emit();
  }

  createCard() {
    
  }
}
