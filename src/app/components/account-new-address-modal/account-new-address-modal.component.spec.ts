import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNewAddressModalComponent } from './account-new-address-modal.component';

describe('AccountNewAddressModalComponent', () => {
  let component: AccountNewAddressModalComponent;
  let fixture: ComponentFixture<AccountNewAddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNewAddressModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNewAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
