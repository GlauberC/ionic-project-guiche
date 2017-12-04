import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { AlertController } from 'ionic-angular';

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
  servicos : any[];
  public data = {
    nome: "",
     descricao: ""
};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public service: ServiceProvider) {
      this.getListaServ();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraServPage');
    this.nomeU = this.navParams.get('nome');
  }
  getListaServ(){
  this.service.getListaServ().subscribe(
    data => this.servicos = data,
    err => console.log(err)
  );
  }


  postCadastraServ(data){
    this.service.postCadastraServ(data).subscribe(
      data=>{
      console.log(data.mensage);
      err=>console.log(err);
      this.showAlert('Serviço Adicionado!', 'O serviço foi cadastrado com sucesso');
      this.getListaServ();
      }
    )};

    deletaServico(data){

        this.service.deletaServico(data.id).subscribe(
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
        title: 'Deletando o serviço',
        message: 'Deseja resalmente deletar esse Serviço?',
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
              this.showAlert('Serviço Deletado', 'Serviço deletado com sucesso');
              this.getListaServ();
              console.log('Agree clicked');
            }
          }
        ]
      });
      confirm.present();
    }

    editaServico(req) {
      let prompt = this.alertCtrl.create({
        title: 'Editar Serviço',
        inputs: [
          {
            name: 'nome',
            placeholder: 'nome',
            value: req.nome
          },

          {
            name: 'descricao',
            placeholder: 'descricao',
            value: req.descricao
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
                  descricao: data.descricao,
              }
              console.log('Saved clicked');
              this.service.editaServico(params).subscribe(
                data=>{
                  console.log(data.mensage);
                  this.getListaServ();
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
