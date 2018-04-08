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
  users: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public webs: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.webs.usuarioId()
    .subscribe(
      (data) => { // Success
        this.users = data;
        console.log(this.users.nombre);
        this.correo = this.users.correo;
        this.tel = this.users.celular;
        this.pass = this.users.pass;
        this.nombre = "    Nombre:  "+this.users.nombre;
        this.id = "    Código:  "+this.users._id;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  guardar(){
    this.users.correo = this.correo;
    this.users.celular = this.tel;
    this.users.pass = this.pass;
    this.webs.actualizarUsuario(this.users);
  }

}
