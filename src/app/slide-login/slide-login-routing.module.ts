import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideLoginPage } from './slide-login.page';

const routes: Routes = [
  {
    path: '',
    component: SlideLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideLoginPageRoutingModule {}
