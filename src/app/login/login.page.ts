import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  iconSenha: string = 'eye-off-outline';

  EMAIL: string = '';
  SENHA: string = '';

  saudacao: string = '';


  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private toastController: ToastController, private route: Router) { }


  ngOnInit() {

    $('form[name="FormLoginUsuario"]').on('submit', function (event) {
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
            ToastSucess(res.resposta.toast.mensagem, res.resposta.toast.color, res.resposta.toast.icon);
            if (res.resposta.data.ok) {
              toHome();
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
      this.presentToast('top', 'Ocorre um erro, verifique sua conexão e tente novamente', 'danger', 'close-circle-outline', 5000);
    }

    const toHome = () => {
      this.route.navigateByUrl('/slide-login');
    }

    const hora = new Date().getHours();

    if (hora >= 6 && hora < 12) {
      this.saudacao = "Bom dia!";
    } else if (hora >= 12 && hora <= 18) {
      this.saudacao = "Boa tarde!";
    } else {
      this.saudacao = "Boa noite!"
    }

  }



  public toggleSenha() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'password';
      this.iconSenha = "eye-off-outline";
    } else {
      this.passwordShown = true;
      this.passwordType = "text"
      this.iconSenha = "eye-outline";
    }
  }

  // login() {
  //   // const UserLogado = localStorage.getItem("UserLogado");

  //   // if (this.email === '' && this.senha === '') {
  //   //   if(UserLogado != null){
  //   //     this.route.navigateByUrl('/tabs/tab1');
  //   //     this.presentToast('top', 'Olá, Kaio seja Bem Vindo!', 'success')
  //   //   } else {
  //   //     localStorage.setItem("UserLogado", true.toString());
  //   //     this.route.navigateByUrl('/slide-login');
  //   //   }
  //   // } else {
  //   //   this.presentToast('top', 'E-mail ou senha incorretos!', 'danger')
  //   // }

  // }

  register() {
    this.route.navigateByUrl('/registre-se')
  }
  recuperarSenha() {
    this.route.navigateByUrl('/recuperar-senha')
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