import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtendPage } from '../atend/atend';
import { CadastraFuncPage } from '../cadastra-func/cadastra-func';
import { CadastraServPage } from '../cadastra-serv/cadastra-serv';
import { ServiceProvider } from '../../providers/service/service';

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

  usuario : any[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: ServiceProvider) {
      this.getUsuario();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LogadoPage');
  }
  goToAtendPage(user){
    this.navCtrl.push(AtendPage, user );
  }
  goToCadastraFuncPage(user){
    this.navCtrl.push(CadastraFuncPage, user);
  }
  goToCadastraServPage(user){
    this.navCtrl.push(CadastraServPage, user);
  }

  getUsuario(){
  this.service.getUser().subscribe(
    data => this.usuario = data,
    err => console.log(err)
  )};


}
