import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaCurriculoPageRoutingModule } from './pagina-curriculo-routing.module';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { PaginaCurriculoPage } from './pagina-curriculo.page';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaCurriculoPageRoutingModule
  ],
  declarations: [PaginaCurriculoPage],
  providers: [File, FileOpener, FileTransfer, FileTransferObject, FilePath],
})
export class PaginaCurriculoPageModule { }
