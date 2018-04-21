import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPlantButtonComponent } from './add-new-plant-button.component';

describe('AddNewPlantButtonComponent', () => {
  let component: AddNewPlantButtonComponent;
  let fixture: ComponentFixture<AddNewPlantButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewPlantButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPlantButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
