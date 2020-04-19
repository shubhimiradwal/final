import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanagmentComponent } from './leavemanagment.component';

describe('LeavemanagmentComponent', () => {
  let component: LeavemanagmentComponent;
  let fixture: ComponentFixture<LeavemanagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavemanagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemanagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
