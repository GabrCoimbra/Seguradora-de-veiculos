import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoComponent } from './descricao.component';

describe('DescricaoComponent', () => {
  let component: DescricaoComponent;
  let fixture: ComponentFixture<DescricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
