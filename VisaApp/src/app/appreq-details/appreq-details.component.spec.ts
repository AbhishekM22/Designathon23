import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppreqDetailsComponent } from './appreq-details.component';

describe('AppreqDetailsComponent', () => {
  let component: AppreqDetailsComponent;
  let fixture: ComponentFixture<AppreqDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppreqDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppreqDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
