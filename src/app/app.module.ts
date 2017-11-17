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
    AvaliaAtendPageModule
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
