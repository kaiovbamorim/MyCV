import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExperienciaEducacaoPageRoutingModule } from './experiencia-educacao-routing.module';

import { ExperienciaEducacaoPage } from './experiencia-educacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciaEducacaoPageRoutingModule
  ],
  declarations: [ExperienciaEducacaoPage]
})
export class ExperienciaEducacaoPageModule {}
