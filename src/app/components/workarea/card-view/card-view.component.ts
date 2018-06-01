import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { IAppState } from '../../../redux';
import { getCardRequest } from '../../../redux/actions-creators';
import { nameMapping } from '../../../fields-source';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  @select(state => state.targetCard.entity) getEntity;
  nameMapping = nameMapping;
  nameMappingKey = Object.keys(nameMapping);
  entity = {};

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
        }
      });

    const id = this.route.snapshot.paramMap.get('id');
    this.ngRedux.dispatch(getCardRequest(id));

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          const id = this.route.snapshot.paramMap.get('id');
          this.ngRedux.dispatch(getCardRequest(id));
        }
      });
  }

}
