import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowDashboardComponent } from './window-dashboard.component';

describe('WindowDashboardComponent', () => {
  let component: WindowDashboardComponent;
  let fixture: ComponentFixture<WindowDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
