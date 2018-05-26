import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmprestimoCreateUpdateComponent } from './emprestimo-create-update.component';

describe('EmprestimoCreateUpdateComponent', () => {
  let component: EmprestimoCreateUpdateComponent;
  let fixture: ComponentFixture<EmprestimoCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmprestimoCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmprestimoCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
