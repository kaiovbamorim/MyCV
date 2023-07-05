import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as $ from 'jquery';


import { Camera, CameraResultType, CameraSource, CameraPhoto } from '@capacitor/camera';

@Component({
  selector: 'app-registre-se',
  templateUrl: './registre-se.page.html',
  styleUrls: ['./registre-se.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistreSePage implements OnInit {

  userImg: string = '../../assets/avatar.png';
  iconSenha: string = 'eye-off-outline';
  NOME: string = ''
  EMAIL: string = '';
  SENHA: string = '';


  passwordType: string = 'password';
  passwordShown: boolean = false;


  constructor(private toastController: ToastController, private route: Router, private modalCtrl: ModalController, private animationCtrl: AnimationController) { }


  // VALIDAÇÃO DO FORMULÁRIO

  // ENVIA OS DADOS VIA AJAX PARA API LARAVEL
  ngOnInit() {

    $('form[name="FormRegistrarUsuario"]').on('submit', function (event) {
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
              toLogin();
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

    const toLogin = () => {
      this.route.navigateByUrl('/login');
    }

  }







  async abrirCamera() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.userImg = image.webPath ?? "../../assets/avatar.png";
  }

  async abrirGaleria() {

    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });

    this.userImg = image.webPath ?? "../../assets/avatar.png";

  }

  async fecharModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


  ngAfterViewInit() {
  }
  public togglePassword() {
    if (this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = "password";
      this.iconSenha = "eye-off-outline";

    } else {
      this.passwordShown = true;
      this.passwordType = "text";
      this.iconSenha = "eye-outline"
    }
  }


  // registrar() {
  //   if (this.email === '123') {
  //     this.presentToast('top', 'E-mail já cadastrado!', 'danger', 'close-circle-outline', 1500)
  //   } else {
  //     this.presentToast('top', 'Obrigado por se cadastrar em nosso sistema! Enviamos um link de confirmação para o seu endereço de e-mail. Por favor, verifique sua caixa de entrada e clique no link para ativar sua conta.', 'primary', 'checkmark-circle-outline', 5000);
  //     }
  // }

  toLogin() {
    this.route.navigateByUrl('/')
  }
  newPassword() {
    this.route.navigateByUrl('/new-password')
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