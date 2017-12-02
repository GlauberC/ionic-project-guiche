import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EsperaAtendPage } from '../espera-atend/espera-atend';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ListaServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-servico',
  templateUrl: 'lista-servico.html',
})
export class ListaServicoPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: ServiceProvider) {
      this.getListaServico();
  }
  servs : any[];

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaServicoPage');
  }
  goToEsperaAtend(){
    this.navCtrl.push(EsperaAtendPage);
  }
  getListaServico(){
  this.service.getServico().subscribe(
    data => this.servs = data,
    err => console.log(err)
  );
}

}
