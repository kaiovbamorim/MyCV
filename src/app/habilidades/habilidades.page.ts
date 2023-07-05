import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.page.html',
  styleUrls: ['./habilidades.page.scss'],
})
export class HabilidadesPage implements OnInit {
  dataInicio: string = "";
  novaHabilidade: string = '';
  habilidades: string[] = [];
  public isDisabled = true;
  constructor(private toastController: ToastController, private route: Router) { }

  adicionarHabilidade() {

    console.log(this.novaHabilidade)
    if (this.novaHabilidade.trim() !== '') {
      this.habilidades.push(this.novaHabilidade);
      this.novaHabilidade = '';
      console.log(this.habilidades)
    } else {
      this.presentToast('top', 'Insira alguma habilidade!', 'danger', 'close-circle-outline', 2000)
    }
  }
  removeHabilidade(i: any) {
    this.habilidades.splice(i, 1);
    console.log(this.habilidades)
  }

  ngOnInit() {
    const self = this;

    $('form[name="FormHabilidades"]').on('submit', function (event) {
      event.preventDefault();

      const form = $(this);
      const action = form.attr('action');
      const habilidadesString = self.habilidades.join('/');

      $.ajax({
        url: action,
        type: 'POST',
        data: habilidadesString,
        success: function (res) {
          if (res) {
            console.log(res)
            ToastSucesso(res.resposta.toast.mensagem, res.resposta.toast.color, res.resposta.toast.icon);
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
      this.route.navigateByUrl('/tabs/tab1');
    }

  }

  goHome() {
    this.route.navigateByUrl('/tabs/tab1');
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
