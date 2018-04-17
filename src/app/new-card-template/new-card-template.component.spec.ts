import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardTemplateComponent } from './new-card-template.component';

describe('NewCardTemplateComponent', () => {
  let component: NewCardTemplateComponent;
  let fixture: ComponentFixture<NewCardTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
