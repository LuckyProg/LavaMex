import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HistorialPage } from '../pages/historial/historial';
import { VehiculosPage } from '../pages/vehiculos/vehiculos';
import { PerfilPage } from '../pages/perfil/perfil';
import { InicioPage } from '../pages/inicio/inicio';
import { PagoPage } from '../pages/pago/pago';
import { RegistrarPage } from '../pages/registrar/registrar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InicioPage;

  pages: Array<{title: string, ic: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Lavado', ic: 'water', component: HomePage },
      { title: 'Historial', ic: 'time', component: HistorialPage },
      { title: 'Vehiculos', ic: 'car', component: VehiculosPage },
      { title: 'Mi Perfil', ic: 'person', component: PerfilPage },
      { title: 'Cerrar sesión', ic: 'log-out', component: InicioPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
