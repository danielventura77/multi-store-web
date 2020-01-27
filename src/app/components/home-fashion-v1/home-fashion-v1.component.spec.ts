import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashionV1Component } from './home-fashion-v1.component';

describe('HomeFashionV1Component', () => {
  let component: HomeFashionV1Component;
  let fixture: ComponentFixture<HomeFashionV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFashionV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFashionV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
