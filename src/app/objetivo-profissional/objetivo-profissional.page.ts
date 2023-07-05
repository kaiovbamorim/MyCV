import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

import * as $ from 'jquery';

@Component({
  selector: 'app-objetivo-profissional',
  templateUrl: './objetivo-profissional.page.html',
  styleUrls: ['./objetivo-profissional.page.scss'],
})
export class ObjetivoProfissionalPage implements OnInit {

  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {

    $('form[name="FormObjetivoResumo"]').on('submit', function (event) {
      event.preventDefault();

      var form = $(this);
      var action = form.attr('action');
      var formData = form.serialize();

      $.ajax({
        url: action,
        type: 'POST',
        data: formData,
        dataType: 'json',
        success: function (res) {
          if (res) {
            console.log(res);
            if (res.resposta.data.ok) {
              toHabilidades();
            }
          }
        },
        error: function (res) {
          console.log('ERRO', res);
          ToastError();
        }
      });

    });

    const ToastSucess = (mensagem: any, color: any, icon: any) => {
      this.presentToast('top', mensagem, color, icon, 5000);
    }

    const ToastError = () => {
      this.presentToast('top', 'Ocorreu um erro, verifique sua conexão e tente novamente', 'danger', 'close-circle-outline', 5000);
    }

    const toHabilidades = () => {
      this.route.navigateByUrl('/habilidades');
    }

  }

  async Voltar() {
    this.route.navigateByUrl('/info-pessoais');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', texto: string, cor: string, icon: string, duracao: number) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: duracao,
      position: position,
      icon: icon
    });

    await toast.present();
  }

}
