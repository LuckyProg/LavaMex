import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Calendar } from '@ionic-native/calendar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistorialPage } from '../pages/historial/historial';
import { VehiculosPage } from '../pages/vehiculos/vehiculos';
import { PerfilPage } from '../pages/perfil/perfil';
import { InicioPage } from '../pages/inicio/inicio';
import { CalendarioPage } from '../pages/calendario/calendario';
import { PaquetePage } from '../pages/paquete/paquete';
import { PagoPage } from '../pages/pago/pago';
import { RegistrarPage } from '../pages/registrar/registrar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebServiceProvider } from '../providers/web-service/web-service';
import { GlobalProvider } from '../providers/global/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistorialPage,
    VehiculosPage,
    PerfilPage,
    InicioPage,
    CalendarioPage,
    PaquetePage,
    PagoPage,
    RegistrarPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistorialPage,
    VehiculosPage,
    PerfilPage,
    InicioPage,
    CalendarioPage,
    PaquetePage,
    PagoPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebServiceProvider,
    GlobalProvider
  ]
})
export class AppModule {}
