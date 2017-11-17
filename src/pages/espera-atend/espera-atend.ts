import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AvaliaAtendPage } from '../avalia-atend/avalia-atend';


/**
 * Generated class for the EsperaAtendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espera-atend',
  templateUrl: 'espera-atend.html',
})
export class EsperaAtendPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsperaAtendPage');
  }

  returnToListaServicoPage(){
    this.navCtrl.pop();
  }
  goToAvaliaAtendPage(){
    this.navCtrl.push(AvaliaAtendPage);
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Alerta de confirmação?',
      message: 'Deseja cancelar o serviço solicitado?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.returnToListaServicoPage();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }


}
