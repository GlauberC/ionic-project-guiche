import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the CadastraServPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-serv',
  templateUrl: 'cadastra-serv.html',
})
export class CadastraServPage {
  nomeU : string ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: ServiceProvider) {
    this.getListaUser()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraServPage');
    this.nomeU = this.navParams.get('nome');
  }


}
