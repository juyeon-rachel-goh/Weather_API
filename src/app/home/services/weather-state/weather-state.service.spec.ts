import { TestBed } from '@angular/core/testing';

import { GeocodestateService } from './weather-state.service';

describe('GeocodestateService', () => {
  let service: GeocodestateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocodestateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
