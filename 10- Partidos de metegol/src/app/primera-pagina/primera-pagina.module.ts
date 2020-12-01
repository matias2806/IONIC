import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeraPaginaPageRoutingModule } from './primera-pagina-routing.module';

import { PrimeraPaginaPage } from './primera-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeraPaginaPageRoutingModule
  ],
  declarations: [PrimeraPaginaPage]
})
export class PrimeraPaginaPageModule {}
