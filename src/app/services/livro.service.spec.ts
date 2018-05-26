import { TestBed, inject } from '@angular/core/testing';

import { LivroService } from './livro.service';

describe('LivroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivroService]
    });
  });

  it('should be created', inject([LivroService], (service: LivroService) => {
    expect(service).toBeTruthy();
  }));
});
