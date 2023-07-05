import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registre-se',
    loadChildren: () => import('./registre-se/registre-se.module').then( m => m.RegistreSePageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'slide-login',
    loadChildren: () => import('./slide-login/slide-login.module').then( m => m.SlideLoginPageModule)
  },
  {
    path: 'pagina-curriculo',
    loadChildren: () => import('./pagina-curriculo/pagina-curriculo.module').then( m => m.PaginaCurriculoPageModule)
  },
  {
    path: 'info-pessoais',
    loadChildren: () => import('./info-pessoais/info-pessoais.module').then( m => m.InfoPessoaisPageModule)
  },
  {
    path: 'objetivo-profissional',
    loadChildren: () => import('./objetivo-profissional/objetivo-profissional.module').then( m => m.ObjetivoProfissionalPageModule)
  },
  {
    path: 'experiencia-educacao',
    loadChildren: () => import('./experiencia-educacao/experiencia-educacao.module').then( m => m.ExperienciaEducacaoPageModule)
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./habilidades/habilidades.module').then( m => m.HabilidadesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
