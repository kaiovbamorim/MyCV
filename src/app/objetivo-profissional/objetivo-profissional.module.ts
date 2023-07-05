import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjetivoProfissionalPageRoutingModule } from './objetivo-profissional-routing.module';

import { ObjetivoProfissionalPage } from './objetivo-profissional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjetivoProfissionalPageRoutingModule
  ],
  declarations: [ObjetivoProfissionalPage]
})
export class ObjetivoProfissionalPageModule {}
