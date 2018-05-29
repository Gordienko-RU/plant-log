// TODO: create one component for both form
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, NgRedux } from '@angular-redux/store';

import { getEditValidationMap, inputs, selects } from '../new-card-form/fields-source';
import { editCardRequest } from '../../../redux/actions-creators'
import { IAppState } from '../../../redux';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.scss']
})
export class EditCardFormComponent implements OnInit {
  @select(state => state.targetCard.entity) getEntity;
  inputs = inputs;
  selects = selects;
  editCardForm: FormGroup;

  @Output() closeModalWindow = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private ngRedux: NgRedux<IAppState>
  ) {}

  close() {
    this.closeModalWindow.emit();
  }

  editCard() {
    const card = this.editCardForm.value;
    this.ngRedux.dispatch(editCardRequest(card));
    this.closeModalWindow.emit();
  }

  ngOnInit() {
    this.getEntity
      .subscribe(entity => {
        if (entity) {
          this.editCardForm = this.fb.group({
            ...getEditValidationMap(entity)
          })
        }
      });
  }
}
