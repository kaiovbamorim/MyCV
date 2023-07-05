import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjetivoProfissionalPage } from './objetivo-profissional.page';

describe('ObjetivoProfissionalPage', () => {
  let component: ObjetivoProfissionalPage;
  let fixture: ComponentFixture<ObjetivoProfissionalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ObjetivoProfissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
