import { TestBed } from '@angular/core/testing';

import { KmellappService } from './kmellapp.service';

describe('KmellappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KmellappService = TestBed.get(KmellappService);
    expect(service).toBeTruthy();
  });
});
