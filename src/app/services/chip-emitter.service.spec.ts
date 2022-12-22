import { TestBed } from '@angular/core/testing';

import { ChipEmitterService } from './chip-emitter.service';

describe('ChipEmitterService', () => {
  let service: ChipEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
