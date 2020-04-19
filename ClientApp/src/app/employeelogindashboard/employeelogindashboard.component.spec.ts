import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeelogindashboardComponent } from './employeelogindashboard.component';

describe('EmployeelogindashboardComponent', () => {
  let component: EmployeelogindashboardComponent;
  let fixture: ComponentFixture<EmployeelogindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelogindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeelogindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
