import { TestBed, inject } from '@angular/core/testing';

import { LeitorService } from './leitor.service';

describe('LeitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeitorService]
    });
  });

  it('should be created', inject([LeitorService], (service: LeitorService) => {
    expect(service).toBeTruthy();
  }));
});
