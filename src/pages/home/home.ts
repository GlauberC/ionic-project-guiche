import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaServicoPage } from '../lista-servico/lista-servico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goToListaServicoPage(){
    this.navCtrl.push(ListaServicoPage);
  }

}
