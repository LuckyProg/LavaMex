import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

	correo = "";
	tel = "";
	pass = "";
  nombre = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public webs: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.webs.usuarioId()
    .subscribe(
        (data) => { // Success
          console.log(data.nombre);
          this.correo = data.correo;
          this.tel = data.celular;
          this.pass = data.pass;
          this.nombre = data.nombre;
        },
        (error) =>{
          console.error(error);
        }
      );
  }

}
