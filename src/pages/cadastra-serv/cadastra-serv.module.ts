import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraServPage } from './cadastra-serv';

@NgModule({
  declarations: [
    CadastraServPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraServPage),
  ],
})
export class CadastraServPageModule {}
