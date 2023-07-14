import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyVisaComponent } from './apply-visa.component';

describe('ApplyVisaComponent', () => {
  let component: ApplyVisaComponent;
  let fixture: ComponentFixture<ApplyVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyVisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
