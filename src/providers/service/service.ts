import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http' ;
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  api : string = 'http://bd4web-glaubercarv850761.codeanyapp.com/projeto/';

  constructor(public http: Http) {}

    getServico(){
      return this.http.get(this.api + 'recuperaServicos.php').map(res=>res.json())
    }
    getUser(){
      return this.http.get(this.api + 'recuperaUser.php').map(res=>res.json())
    }
    getListaUser(){
      return this.http.get(this.api + 'recuperaUsuarios.php').map(res=>res.json())
    }
    getListaFuncao(){
      return this.http.get(this.api + 'recuperaFuncao.php').map(res=>res.json())
    }
    getListaServ(){
      return this.http.get(this.api + 'recuperaServicos.php').map(res=>res.json())
    }



     postCadastraU( data ){
           let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
           return this.http.post(this.api + "cadastraUser.php", data,{
             headers: headers,
             method: "POST"
           }).map(
             (res:Response) => {return res.json();}
           );
      }
      deletaUser( id ){
            let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "deletaUser.php", id,{
              headers: headers,
              method: "POST"
            }).map(
              (res:Response) => {return res.json();}
            );
      }

      editaUser( data ){
            let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "editaUser.php", data,{
              headers: headers,
              method: "POST"
            }).map(
              (res:Response) => {return res.json();}
            );
      }

      postCadastraServ( data ){
            let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
            return this.http.post(this.api + "cadastraServ.php", data,{
              headers: headers,
              method: "POST"
            }).map(
              (res:Response) => {return res.json();}
            );
       }

       deletaServico( id ){
             let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
             return this.http.post(this.api + "deletaServ.php", id,{
               headers: headers,
               method: "POST"
             }).map(
               (res:Response) => {return res.json();}
             );
       }
       editaServico( data ){
             let headers = new Headers({'Content-Type' : 'application/x-www-form-urlencoded' });
             return this.http.post(this.api + "editaServ.php", data,{
               headers: headers,
               method: "POST"
             }).map(
               (res:Response) => {return res.json();}
             );
       }
}
