import { TestBed, inject } from '@angular/core/testing';

import { EmprestimoService } from './emprestimo.service';

describe('EmprestimoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmprestimoService]
    });
  });

  it('should be created', inject([EmprestimoService], (service: EmprestimoService) => {
    expect(service).toBeTruthy();
  }));
});
