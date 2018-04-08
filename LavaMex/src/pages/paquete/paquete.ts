import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { HomePage } from '../home/home';
import { WebServiceProvider } from '../../providers/web-service/web-service';

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
  id: any;
  lavado: any;
  day: any;
  month: any;
  year: any;
  ip: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public webService: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaquetePage');
    this.id = this.navParams.get('id');
    this.ip = this.navParams.get('ip');
    this.lon = this.navParams.get('lon'); 
    this.lat = this.navParams.get('lat'); 
    this.vehiculo = this.navParams.get('vehiculo');
    this.horario = this.navParams.get('horario'); 
    this.fecha = this.navParams.get('fecha');
    this.day = this.navParams.get('day');
    this.month = this.navParams.get('month');
    this.year = this.navParams.get('year');
    //this.alerta();
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
          fecha: this.fecha, paquete: this.paquete, metPago: this.metPago, id: this.id
        });
      }
      else{
        let pago;
        if(this.metPago==1){pago="efectivo";}
        else{pago="tarjeta";}
        let tipo;
        if(this.paquete==1){tipo="express";}
        if(this.paquete==2){tipo="plus";}
        if(this.paquete==3){tipo="pro";}
        if(this.paquete==4){tipo="premium";}
        let date = new Date(this.year, this.month, this.day, this.horario, 0, 0, 0);
        this.lavado = {ubicacion:{latitud:this.lat, longitud:this.lon}, fecha:date, tipo:tipo, placa:'ggg', pago:pago, status:'espera', _idUsuario:this.id};
        this.webService.registrarLavado(this.lavado, this.ip);
        this.navCtrl.setRoot(HomePage, {alert: true, ip: this.ip, id: this.id});
      }
    }

}
