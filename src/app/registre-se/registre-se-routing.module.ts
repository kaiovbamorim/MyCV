import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistreSePage } from './registre-se.page';

const routes: Routes = [
  {
    path: '',
    component: RegistreSePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistreSePageRoutingModule {}
