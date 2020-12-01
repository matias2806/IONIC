import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaPage } from './fea.page';

const routes: Routes = [
  {
    path: '',
    component: FeaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaPageRoutingModule {}
