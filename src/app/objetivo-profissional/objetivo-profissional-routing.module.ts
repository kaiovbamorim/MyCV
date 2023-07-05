import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjetivoProfissionalPage } from './objetivo-profissional.page';

const routes: Routes = [
  {
    path: '',
    component: ObjetivoProfissionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjetivoProfissionalPageRoutingModule {}
