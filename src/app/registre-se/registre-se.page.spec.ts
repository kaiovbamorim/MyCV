import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistreSePage } from './registre-se.page';

describe('RegistreSePage', () => {
  let component: RegistreSePage;
  let fixture: ComponentFixture<RegistreSePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistreSePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
