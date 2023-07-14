import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedVisaComponent } from './applied-visa.component';

describe('AppliedVisaComponent', () => {
  let component: AppliedVisaComponent;
  let fixture: ComponentFixture<AppliedVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppliedVisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppliedVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
