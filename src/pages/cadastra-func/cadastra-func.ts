import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastraFuncPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastra-func',
  templateUrl: 'cadastra-func.html',
})
export class CadastraFuncPage {
  nomeU : string;
  funcionarios : any[];

  public data = {
    nome: "",
     cpf: "",
      email: "",
       senha: "",
        id_funcao: 0
};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public service: ServiceProvider) {

     this.getListaUser()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraFuncPage');
    this.nomeU = this.navParams.get('nome');

  }
  getListaUser(){
  this.service.getListaUser().subscribe(
    data => this.funcionarios = data,
    err => console.log(err)
  );
  }
  postCadastraU(data){
    this.service.postCadastraU(data).subscribe(
      data=>console.log(data.mensage),
      err=>console.log(err),
      this.showAlert()
    )};
    showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Cadastro Adicionado!',
    subTitle: 'Seu cadastro foi feito com sucesso',
    buttons: ['OK']
  });
  alert.present();

}

}
