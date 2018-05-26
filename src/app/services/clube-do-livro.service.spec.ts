import { TestBed, inject } from '@angular/core/testing';

import { ClubeDoLivroService } from './clube-do-livro.service';

describe('ClubeDoLivroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubeDoLivroService]
    });
  });

  it('should be created', inject([ClubeDoLivroService], (service: ClubeDoLivroService) => {
    expect(service).toBeTruthy();
  }));
});
import { TestBed, inject } from '@angular/core/testing';

import { ClubeDoLivroService } from './clube-do-livro.service';

describe('ClubeDoLivroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClubeDoLivroService]
    });
  });

  it('should be created', inject([ClubeDoLivroService], (service: ClubeDoLivroService) => {
    expect(service).toBeTruthy();
  }));
});
