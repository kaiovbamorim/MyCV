import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';


import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import { ToastController } from '@ionic/angular';

declare var cordova: any;

@Component({
  selector: 'app-pagina-curriculo',
  templateUrl: './pagina-curriculo.page.html',
  styleUrls: ['./pagina-curriculo.page.scss'],
})
export class PaginaCurriculoPage implements OnInit {
  users: any[] = [];

  @ViewChild('curriculo', { static: false }) el!: ElementRef;

  constructor(private apiService: ApiService, private toastController: ToastController, private route: Router, private file: File, private transfer: FileTransfer, private filePath: FilePath) { }


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.apiService.getUsers().subscribe((response: any) => {
      this.users = response as any[];
    });
  }

  voltar() {
    this.route.navigateByUrl('/tabs/tab1');
  }

  // Cria o PDF apartir do elemento da página #curriculo e faz o upload
  printPDF() {
    const element = document.getElementById('curriculo');
    if (element) {
      const options = {
        scale: 2,
        useCORS: true,
        allowTaint: true
      };

      // Criação do PDF
      html2canvas(element, options).then((canvas) => {
        const pdf = new jsPDF('p', 'pt', 'a4');
        const imgData = canvas.toDataURL('image/png');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Curriculo.pdf');

        let pdfOutput = pdf.output();
        let buffer = new ArrayBuffer(pdfOutput.length);
        let array = new Uint8Array(buffer);
        for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
        }

        // Define o diretório que vai ser enviado o PDF
        const directory = this.file.externalRootDirectory + 'Documents/'

        // Nome PDF 
        const fileName = "CurriculoNomeSobrenome.pdf";

        // Enviar o PDF criado para a pasta Documents
        this.file.writeFile(directory, fileName, buffer, { replace: true })
          .then(() => {
            this.presentToast('top', "Seu currículo foi gerado com sucesso! Para encontrá-lo, acesse a pasta 'Documentos' em seu dispositivo.", 'success');
          })
          .catch((err) => {
            this.presentToast('top', 'Erro ao gerar o currículo, reinicie a aplicação e verifique sua conexão', 'danger');
            console.log(err)
          });
      })
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
