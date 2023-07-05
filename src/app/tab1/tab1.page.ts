import { Component, ViewChild, ElementRef } from '@angular/core';
import { Swiper } from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(private route: Router) {}

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  proximoSlide() {
    this.swiper?.slideNext();
  }
  goPageCurriculo(){
    this.route.navigateByUrl('/pagina-curriculo');
  }
}
