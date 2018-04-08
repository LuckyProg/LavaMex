import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';

/**
 * Generated class for the VehiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehiculos',
  templateUrl: 'vehiculos.html',
})
export class VehiculosPage {

	users: any;
	carros: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webs: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiculosPage');
    this.webs.usuarioId()
    .subscribe(
      (data) => { // Success
        this.users = data;
        this.carros = this.users.carros;
        console.log(this.users);
        console.log(this.users.carros.length);
      },
      (error) =>{
        console.error(error);
      }
    );
  }

  agregar(){
  	this.carros.unshift({placa:'',modelo:'',color:'',marca:''});
  	this.webs.actualizarUsuario(this.users);
  }

  guardar(){
    this.users.carros = this.carros;
    this.webs.actualizarUsuario(this.users);
  }

  borrar(c: any){
  	let index = this.carros.indexOf(c);
  	this.carros.splice(index, 1);
  	this.webs.actualizarUsuario(this.users);
  }

}
