import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPessoaisPage } from './info-pessoais.page';

describe('InfoPessoaisPage', () => {
  let component: InfoPessoaisPage;
  let fixture: ComponentFixture<InfoPessoaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoPessoaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
