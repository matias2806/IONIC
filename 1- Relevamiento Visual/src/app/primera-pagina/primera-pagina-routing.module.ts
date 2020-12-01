import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeraPaginaPage } from './primera-pagina.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeraPaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeraPaginaPageRoutingModule {}
