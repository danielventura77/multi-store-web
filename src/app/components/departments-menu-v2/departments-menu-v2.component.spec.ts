import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMenuV2Component } from './departments-menu-v2.component';

describe('DepartmentsMenuV2Component', () => {
  let component: DepartmentsMenuV2Component;
  let fixture: ComponentFixture<DepartmentsMenuV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsMenuV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMenuV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
