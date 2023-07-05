import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienciaEducacaoPage } from './experiencia-educacao.page';

const routes: Routes = [
  {
    path: '',
    component: ExperienciaEducacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperienciaEducacaoPageRoutingModule {}
