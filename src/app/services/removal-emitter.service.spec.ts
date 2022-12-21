import { TestBed } from '@angular/core/testing';

import { RemovalEmitterService } from './removal-emitter.service';

describe('RemovalEmitterService', () => {
  let service: RemovalEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemovalEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
