import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeDoLivroCreateUpdateComponent } from './clube-do-livro-create-update.component';

describe('ClubeDoLivroCreateUpdateComponent', () => {
  let component: ClubeDoLivroCreateUpdateComponent;
  let fixture: ComponentFixture<ClubeDoLivroCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeDoLivroCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeDoLivroCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
