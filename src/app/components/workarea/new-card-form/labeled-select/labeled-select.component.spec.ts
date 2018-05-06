import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeledSelectComponent } from './labeled-select.component';

describe('LabeledSelectComponent', () => {
  let component: LabeledSelectComponent;
  let fixture: ComponentFixture<LabeledSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabeledSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabeledSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
