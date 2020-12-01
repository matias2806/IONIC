import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'fea',
    loadChildren: () => import('./linda/linda.module').then( m => m.LindaPageModule)
  },
  {
    path: 'linda',
    loadChildren: () => import('./linda/linda.module').then( m => m.LindaPageModule)
  },
  {
    path: 'primera-pagina',
    loadChildren: () => import('./primera-pagina/primera-pagina.module').then( m => m.PrimeraPaginaPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
