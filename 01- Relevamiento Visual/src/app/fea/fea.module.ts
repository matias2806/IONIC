import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaPageRoutingModule } from './fea-routing.module';

import { FeaPage } from './fea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaPageRoutingModule
  ],
  declarations: [FeaPage]
})
export class FeaPageModule {}
