import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNewPaymentModalComponent } from './account-new-payment-modal.component';

describe('AccountNewPaymentModalComponent', () => {
  let component: AccountNewPaymentModalComponent;
  let fixture: ComponentFixture<AccountNewPaymentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNewPaymentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNewPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
