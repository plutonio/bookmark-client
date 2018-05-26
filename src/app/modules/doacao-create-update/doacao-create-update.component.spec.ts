import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoCreateUpdateComponent } from './doacao-create-update.component';

describe('DoacaoCreateUpdateComponent', () => {
  let component: DoacaoCreateUpdateComponent;
  let fixture: ComponentFixture<DoacaoCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
