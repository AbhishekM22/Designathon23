import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrVisaReqComponent } from './hr-visa-req.component';

describe('HrVisaReqComponent', () => {
  let component: HrVisaReqComponent;
  let fixture: ComponentFixture<HrVisaReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrVisaReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrVisaReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
