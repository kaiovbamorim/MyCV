import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Swiper } from 'swiper';

@Component({
  selector: 'app-slide-login',
  templateUrl: './slide-login.page.html',
  styleUrls: ['./slide-login.page.scss'],
})
export class SlideLoginPage implements OnInit {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  constructor(private toastController: ToastController, private route: Router, private actionSheetCtrl: ActionSheetController) { }


  async swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  async proximoSlide() {
    this.swiper?.slideNext();
  }

  async goHome() {
    this.route.navigateByUrl('/tabs/tab1');
  }

  async AdicionarDados() {
    this.route.navigateByUrl('/info-pessoais');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Deseja avançar sem preencher os dados?',
      subHeader: 'Só será possível visualizar os modelos.',
      buttons: [
        {
          text: 'Adicionar dados',
          handler: () => {
            this.route.navigateByUrl('/info-pessoais');
          },
        },
        {
          text: 'Pular etapa',
          role: 'destructive',
          handler: () => {
            this.route.navigateByUrl('tabs/tab1');
            this.presentToast('top', 'Olá, Kaio seja Bem Vindo!', 'success');
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  ngOnInit() { }

}
