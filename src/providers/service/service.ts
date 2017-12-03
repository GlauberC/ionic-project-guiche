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

  }
