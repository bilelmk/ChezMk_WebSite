import { TestBed, inject } from '@angular/core/testing';

import { ProcessHttpmsgService } from './process-httpmsg.service';

describe('ProcessHttpmsgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessHttpmsgService]
    });
  });

  it('should ...', inject([ProcessHttpmsgService], (service: ProcessHttpmsgService) => {
    expect(service).toBeTruthy();
  }));
});
