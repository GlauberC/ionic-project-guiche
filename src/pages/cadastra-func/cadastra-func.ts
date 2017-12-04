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
  funcao: any[];

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

     this.getListaUser();
     this.getListaFuncao();
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
  getListaFuncao(){
  this.service.getListaFuncao().subscribe(
    data => this.funcao = data,
    err => console.log(err)
  );
  }
  postCadastraU(data){
    this.service.postCadastraU(data).subscribe(
      data=>{
      console.log(data.mensage);
      this.getListaUser();
      err=>console.log(err);
      this.showAlert('Cadastro Adicionado!', 'O cadastro foi feito com sucesso');
      }
    )};

    deletaCadastro(data){

      this.service.deletaUser(data.id).subscribe(
        data=>console.log(data.mensage),
        err=>console.log(err),
        this.showConfirm()
      )};



  showAlert(titulo : string, sub : string){
  let alert = this.alertCtrl.create({
    title: titulo,
    subTitle: sub,
    buttons: ['OK']
  });
  alert.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Deletando o Usuário',
      message: 'Deseja resalmente deletar esse usuário?',
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
            this.showAlert('Usuário Deletado', 'Usuário deletado com sucesso');
            this.getListaUser();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  editaPerfil(req) {
    let prompt = this.alertCtrl.create({
      title: 'Editar Perfil',
      inputs: [
        {
          name: 'nome',
          placeholder: 'nome',
          value: req.nome
        },

        {
          name: 'email',
          placeholder: 'email',
          value: req.email
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            let params :any ={
                id: req.id,
                nome: data.nome,
                email: data.email
            }
            console.log('Saved clicked');
            this.service.editaUser(params).subscribe(
              data=>{
                console.log(data.mensage);
                this.getListaUser();
                err=>console.log(err);
                }

            )
          }
        }
      ]
    });
    prompt.present();
  }


}
