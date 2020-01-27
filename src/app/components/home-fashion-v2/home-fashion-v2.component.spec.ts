import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFashionV2Component } from './home-fashion-v2.component';

describe('HomeFashionV2Component', () => {
  let component: HomeFashionV2Component;
  let fixture: ComponentFixture<HomeFashionV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFashionV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFashionV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
