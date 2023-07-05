import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  iconSenha: string = 'eye-off-outline';

  email: string = '';
  senha: string = '';
  saudacao: string = '';


  passwordType: string = 'password';
  passwordShown: boolean = false;

  constructor(private toastController: ToastController, private route: Router) { }


  
  ngOnInit() {}

  voltar(){
    this.route.navigateByUrl('/login');
  }

  login() {
    if (this.email === '' && this.senha === '') {
      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('top', 'Olá, Kaio seja Bem Vindo!', 'success')
    } else {
      this.presentToast('top', 'E-mail ou senha incorretos!', 'danger')
    }
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
}
