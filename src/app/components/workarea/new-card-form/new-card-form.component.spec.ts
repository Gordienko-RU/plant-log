import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardFormComponent } from './add-new-card-form.component';

describe('NewCardFormComponent', () => {
  let component: NewCardFormComponent;
  let fixture: ComponentFixture<NewCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
