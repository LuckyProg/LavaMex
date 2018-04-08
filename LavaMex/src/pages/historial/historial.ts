import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

	lavados: any;
	direccion: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webs: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorialPage');
    this.webs.lavadosUser()
    .subscribe(
      (data) => { // Success
        this.lavados = data;
        console.log(this.lavados[0].tipo);
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  obtenerDir(lat: any, lon: any){
  	this.webs.direccionLavado(lat, lon)
    .subscribe(
      (data) => { // Success
        this.direccion = data;
        console.log(this.direccion.results[0].formatted_address);
        return this.direccion.results[0].formatted_address;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}
