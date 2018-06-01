// TODO: create one component for both form
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, NgRedux } from '@angular-redux/store';

import { getEditValidationMap, inputs, selects } from '../../../fields-source';
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
  id = null;

  @Output() closeModalWindow = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private ngRedux: NgRedux<IAppState>
  ) {}

  close() {
    this.closeModalWindow.emit();
  }

  editCard() {
    const card = Object.assign({}, this.editCardForm.value, { id: this.id });
    this.ngRedux.dispatch(editCardRequest(card));
    this.closeModalWindow.emit();
  }

  ngOnInit() {
    this.getEntity
      .subscribe(entity => {
        if (entity) {
          this.editCardForm = this.fb.group({
            ...getEditValidationMap(entity),
          });
          this.id = entity.id;
        }
      });
  }
}
