import { TestBed, inject } from '@angular/core/testing';

import { AvengerService } from './avenger.service';

describe('AvengerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvengerService]
    });
  });

  it('should be created', inject([AvengerService], (service: AvengerService) => {
    expect(service).toBeTruthy();
  }));
});
