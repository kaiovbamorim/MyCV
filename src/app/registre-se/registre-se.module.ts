import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistreSePageRoutingModule } from './registre-se-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistreSePage } from './registre-se.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistreSePageRoutingModule,
    ReactiveFormsModule
  ],
})
export class RegistreSePageModule { }
