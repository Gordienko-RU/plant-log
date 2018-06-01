import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Router, NavigationEnd } from '@angular/router';

import { IAppState } from '../../redux';
import { deleteCardRequest } from '../../redux/actions-creators';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss'],
})
export class WorkareaComponent implements OnInit {
  isNewCardModalWindowActive: boolean;
  isEditCardModalWindowActive: boolean;
  isCardPage: boolean;
  id: string;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
  ) { }

  toggleNewCardModalWindow() {
    this.isNewCardModalWindowActive = !this.isNewCardModalWindowActive;
  }

  toggleEditCardModalWindow() {
    this.isEditCardModalWindowActive = !this.isEditCardModalWindowActive;
  }

  deleteCard() {
    if(confirm('Удалить запись?')) {
      this.ngRedux.dispatch(deleteCardRequest(this.id));
      this.router.navigate(['']);
    };
  }

  ngOnInit() {
    this.isNewCardModalWindowActive = false;
    this.router.events
      .subscribe((event) => {
        const url = window.location.href;

        if (event instanceof NavigationEnd) {
          this.isCardPage = url.indexOf('cards') !== -1
            ? true
            : false;
          this.id = url.slice(url.lastIndexOf('/') + 1)
        }
      });
  }

}
