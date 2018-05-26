import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoListComponent } from './doacao-list.component';

describe('DoacaoListComponent', () => {
  let component: DoacaoListComponent;
  let fixture: ComponentFixture<DoacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
