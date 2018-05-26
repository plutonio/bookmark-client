import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeitorCreateUpdateComponent } from './leitor-create-update.component';

describe('LeitorCreateUpdateComponent', () => {
  let component: LeitorCreateUpdateComponent;
  let fixture: ComponentFixture<LeitorCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeitorCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeitorCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
