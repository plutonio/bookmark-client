import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeDoLivroListComponent } from './clube-do-livro-list.component';

describe('ClubeDoLivroListComponent', () => {
  let component: ClubeDoLivroListComponent;
  let fixture: ComponentFixture<ClubeDoLivroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubeDoLivroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeDoLivroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
