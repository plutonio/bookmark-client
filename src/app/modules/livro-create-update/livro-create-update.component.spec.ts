import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroCreateUpdateComponent } from './livro-create-update.component';

describe('LivroCreateUpdateComponent', () => {
  let component: LivroCreateUpdateComponent;
  let fixture: ComponentFixture<LivroCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
