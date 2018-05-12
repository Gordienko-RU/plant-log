import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';

import { validationMap, inputs, selects } from './fields-source';
import { addCardRequest } from '../../../redux/actions-creators'
import { IAppState } from '../../../redux';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.scss']
})
export class NewCardFormComponent implements OnInit {
  inputs = inputs;
  selects = selects;
  newCardForm: FormGroup;

  @Output() closeModalWindow = new EventEmitter<string>();

  constructor(
    fb: FormBuilder,
    private ngRedux: NgRedux<IAppState>
  ) {
    this.newCardForm = fb.group({
      ...validationMap
    })
  }

  close() {
    this.closeModalWindow.emit();
  }

  createCard() {
    const card = this.newCardForm.value;
    this.ngRedux.dispatch(addCardRequest(card));
  }

  ngOnInit() {
  }
}
