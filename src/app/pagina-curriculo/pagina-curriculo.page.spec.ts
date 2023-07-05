import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCurriculoPage } from './pagina-curriculo.page';

describe('PaginaCurriculoPage', () => {
  let component: PaginaCurriculoPage;
  let fixture: ComponentFixture<PaginaCurriculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaginaCurriculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
