import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html',
})
export class PagoPage {

  lat = 0;
  lon = 0;
  vehiculo = "";
  horario: any;
  fecha: any;
  paquete: any;
  metPago: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagoPage');
    this.lon = this.navParams.get('lon'); 
    this.lat = this.navParams.get('lat'); 
    this.vehiculo = this.navParams.get('vehiculo');
    this.horario = this.navParams.get('horario'); 
    this.fecha = this.navParams.get('fecha');
    this.paquete = this.navParams.get('paquete');
    this.metPago = this.navParams.get('metPago');
    this.alerta();
  }

  	alerta(){
  		let alert = this.alertCtrl.create({
		    title: 'na',
		    buttons: ['OK']
		  });
		  alert.setTitle("Datos del lavado");
		  alert.setMessage('[Coche: '+this.vehiculo+']; [Latitud: '+this.lat+']; [Longitud: '+this.lon+']; [Fecha: '+this.fecha+']; [Horario: '+this.horario+':00]; [Paquete: '+this.paquete+']; [Metodo de Pago: '+this.metPago+']; ');
          alert.present();
  	}

}
