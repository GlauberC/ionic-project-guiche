import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaServicoPageModule } from '../pages/lista-servico/lista-servico.module';
import { EsperaAtendPageModule } from '../pages/espera-atend/espera-atend.module';
import { AvaliaAtendPageModule } from '../pages/avalia-atend/avalia-atend.module';
import { LogadoPageModule } from '../pages/logado/logado.module';
import { CadastraServPageModule } from '../pages/cadastra-serv/cadastra-serv.module';
import { CadastraFuncPageModule } from '../pages/cadastra-func/cadastra-func.module';
import { AtendPageModule } from '../pages/atend/atend.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ListaServicoPageModule,
    EsperaAtendPageModule,
    AvaliaAtendPageModule,
    LogadoPageModule,
    CadastraServPageModule,
    CadastraFuncPageModule,
    AtendPageModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]

})
export class AppModule {}
