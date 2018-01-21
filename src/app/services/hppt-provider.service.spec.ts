import { TestBed, inject } from '@angular/core/testing';

import { HpptProviderService } from './hppt-provider.service';

describe('HpptProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HpptProviderService]
    });
  });

  it('should be created', inject([HpptProviderService], (service: HpptProviderService) => {
    expect(service).toBeTruthy();
  }));
});
