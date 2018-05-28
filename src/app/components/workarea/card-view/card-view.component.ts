import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { IAppState } from '../../../redux';
import { getCardRequest } from '../../../redux/actions-creators';
import { nameMapping } from '../new-card-form/fields-source';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @select(state => state.targetCard.entity) getEntity;
  nameMapping = nameMapping;
  entity = {};
  entityKeys = [];

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getEntity
      .subscribe(entity => {
        if (entity) {
          this.entity = entity;
          this.entityKeys = Object.keys(entity);
        }
      });

    const title = this.route.snapshot.paramMap.get('title');
    this.ngRedux.dispatch(getCardRequest(title));

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const title = this.route.snapshot.paramMap.get('title');
          this.ngRedux.dispatch(getCardRequest(title));
        }
      });
  }

}
