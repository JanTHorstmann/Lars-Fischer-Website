import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingDates } from './upcoming-dates';

describe('UpcomingDates', () => {
  let component: UpcomingDates;
  let fixture: ComponentFixture<UpcomingDates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingDates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingDates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
