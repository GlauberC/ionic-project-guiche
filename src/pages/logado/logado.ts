import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtendPage } from '../atend/atend';
import { CadastraFuncPage } from '../cadastra-func/cadastra-func';
import { CadastraServPage } from '../cadastra-serv/cadastra-serv';

/**
 * Generated class for the LogadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logado',
  templateUrl: 'logado.html',
})
export class LogadoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogadoPage');
  }
  goToAtendPage(){
    this.navCtrl.push(AtendPage);
  }
  goToCadastraFuncPage(){
    this.navCtrl.push(CadastraFuncPage);
  }
  goToCadastraServPage(){
    this.navCtrl.push(CadastraServPage);
  }

}
