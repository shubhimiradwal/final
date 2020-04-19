import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlogindashboardComponent } from './adminlogindashboard.component';

describe('AdminlogindashboardComponent', () => {
  let component: AdminlogindashboardComponent;
  let fixture: ComponentFixture<AdminlogindashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlogindashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlogindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
