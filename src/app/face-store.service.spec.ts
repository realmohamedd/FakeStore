import { TestBed } from '@angular/core/testing';

import { FaceStoreService } from './face-store.service';

describe('FaceStoreService', () => {
  let service: FaceStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
