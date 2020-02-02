import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPasswordRecoveryComponent } from './account-password-recovery.component';

describe('AccountPasswordRecoveryComponent', () => {
  let component: AccountPasswordRecoveryComponent;
  let fixture: ComponentFixture<AccountPasswordRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPasswordRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
