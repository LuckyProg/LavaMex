import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';
import { AlertController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
	
  users: any;
  user: any = {nombre:'',correo:'',celular:'',pass:'',carros:{placa:'',modelo:'',color:'',marca:''}};
  ip: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
    console.log(this.user.nombre);
    this.ip = this.navParams.get('ip');
    this.webService.getUsers(this.ip)
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(Object.keys(data).length);
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  saveUsr(){
    console.log("Paso 1______"+this.user.carros.placa);
    this.webService.saveUser(this.user, this.ip);
    this.regresar();
  }

  regresar(){
    this.navCtrl.setRoot(InicioPage, { alerta: true});
  }

}
