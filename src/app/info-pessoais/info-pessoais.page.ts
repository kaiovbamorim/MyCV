import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-info-pessoais',
  templateUrl: './info-pessoais.page.html',
  styleUrls: ['./info-pessoais.page.scss'],
})
export class InfoPessoaisPage implements OnInit {

  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {

    $('form[name="FormInfoPessoais"]').on('submit', function (event) {
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
            if (res.resposta.data.ok) {
              toNext();
            }
          }
        },
        error: function (res) {
          console.log('ERRO', res);
          ToastError();
        }
      });

    });

    const ToastSucesso = (mensagem: any, color: any, icon: any) => {
      this.presentToast('top', mensagem, color, icon, 5000);
    }

    const ToastError = () => {
      this.presentToast('top', 'Ocorreu um erro, verifique sua conexão e tente novamente', 'danger', 'close-circle-outline', 5000);
    }

    const toNext = () => {
      this.route.navigateByUrl('/objetivo-profissional');
    }

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
