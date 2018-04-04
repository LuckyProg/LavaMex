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
  id= "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public webs: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.webs.usuarioId()
    .subscribe(
      (data) => { // Success
        let resul: any = data;
        console.log(resul.nombre);
        this.correo = resul.correo;
        this.tel = resul.celular;
        this.pass = resul.pass;
        this.nombre = "    Nombre:  "+resul.nombre;
        this.id = "    Código:  "+resul._id;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

}
