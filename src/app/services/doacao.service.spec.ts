import { TestBed, inject } from '@angular/core/testing';

import { DoacaoService } from './doacao.service';

describe('DoacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoacaoService]
    });
  });

  it('should be created', inject([DoacaoService], (service: DoacaoService) => {
    expect(service).toBeTruthy();
  }));
});
