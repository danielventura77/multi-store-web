import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSigninModalComponent } from './account-signin-modal.component';

describe('AccountSigninModalComponent', () => {
  let component: AccountSigninModalComponent;
  let fixture: ComponentFixture<AccountSigninModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSigninModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSigninModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
