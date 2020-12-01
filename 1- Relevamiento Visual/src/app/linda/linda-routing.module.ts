import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LindaPage } from './linda.page';

const routes: Routes = [
  {
    path: '',
    component: LindaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LindaPageRoutingModule {}
