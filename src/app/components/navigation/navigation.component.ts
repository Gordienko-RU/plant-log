import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../../redux';
import { getListRequest } from '../../redux/actions-creators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @select(state => state.list.items) getItems;
  items = null;

  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit() {
    this.ngRedux.dispatch(getListRequest());

    this.getItems
      .subscribe((items) => this.items = items);
  }

}
