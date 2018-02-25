import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { HomePage } from '../home/home';

/**
 * Generated class for the PaquetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paquete',
  templateUrl: 'paquete.html',
})
export class PaquetePage {

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
    console.log('ionViewDidLoad PaquetePage');
    this.lon = this.navParams.get('lon'); 
    this.lat = this.navParams.get('lat'); 
    this.vehiculo = this.navParams.get('vehiculo');
    this.horario = this.navParams.get('horario'); 
    this.fecha = this.navParams.get('fecha');
    this.alerta();
  }

  	alerta(){
  		let alert = this.alertCtrl.create({
		    title: 'na',
		    buttons: ['OK']
		  });
		  alert.setTitle("Datos del lavado");
		  alert.setMessage('[Coche: '+this.vehiculo+']; [Latitud: '+this.lat+']; [Longitud: '+this.lon+']; [Fecha: '+this.fecha+']; [Horario: '+this.horario+':00];');
          alert.present();
  	}

  	selPaquete(paq: any){
  		this.paquete= paq;
  	}

    selPago(pag: any){
      this.metPago = pag;
    }

    confirmar(){
      if(this.metPago==2){
        this.navCtrl.push(PagoPage, {
          lat: this.lat, lon: this.lon, vehiculo: this.vehiculo, horario: this.horario, 
          fecha: this.fecha, paquete: this.paquete, metPago: this.metPago
        });
      }
      else{
        this.navCtrl.setRoot(HomePage, {alert: true});
      }
    }

}
