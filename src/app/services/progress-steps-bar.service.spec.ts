import { TestBed } from '@angular/core/testing';

import { ProgressStepsBarService } from './progress-steps-bar.service';

describe('ProgressStepsBarService', () => {
  let service: ProgressStepsBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressStepsBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
