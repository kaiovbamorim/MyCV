import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SlideLoginPageRoutingModule } from './slide-login-routing.module';
import { SlideLoginPage } from './slide-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideLoginPageRoutingModule
  ],
  declarations: [SlideLoginPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideLoginPageModule {}
