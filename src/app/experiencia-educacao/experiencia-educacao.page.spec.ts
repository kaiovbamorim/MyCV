import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciaEducacaoPage } from './experiencia-educacao.page';

describe('ExperienciaEducacaoPage', () => {
  let component: ExperienciaEducacaoPage;
  let fixture: ComponentFixture<ExperienciaEducacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExperienciaEducacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
