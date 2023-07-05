import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaCurriculoPage } from './pagina-curriculo.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaCurriculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaCurriculoPageRoutingModule {}
