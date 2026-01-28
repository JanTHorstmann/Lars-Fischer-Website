import { TestBed } from '@angular/core/testing';

import { UpcomingDatesService } from './musicschool-data.service';

describe('UpcomingDatesService', () => {
  let service: UpcomingDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
