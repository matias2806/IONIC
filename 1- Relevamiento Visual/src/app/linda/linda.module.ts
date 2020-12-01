import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LindaPageRoutingModule } from './linda-routing.module';

import { LindaPage } from './linda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LindaPageRoutingModule
  ],
  declarations: [LindaPage]
})
export class LindaPageModule {}
