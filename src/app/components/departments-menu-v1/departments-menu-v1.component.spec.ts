import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMenuV1Component } from './departments-menu-v1.component';

describe('DepartmentsMenuV1Component', () => {
  let component: DepartmentsMenuV1Component;
  let fixture: ComponentFixture<DepartmentsMenuV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsMenuV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMenuV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
