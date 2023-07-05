import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideLoginPage } from './slide-login.page';

describe('SlideLoginPage', () => {
  let component: SlideLoginPage;
  let fixture: ComponentFixture<SlideLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SlideLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
