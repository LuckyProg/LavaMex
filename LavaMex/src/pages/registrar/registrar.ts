import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebServiceProvider } from '../../providers/web-service/web-service';

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
  user: any = {nombre:'',correo:'',celular:'',pass:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
    console.log(this.user.nombre);
      this.webService.getUsers()
      .subscribe(
        (data) => { // Success
          this.users = data;
          console.log(data.length);
        },
        (error) =>{
          console.error(error);
        }
      );
  }

    saveUsr(){
      console.log("Paso 1");
      this.webService.saveUser(this.user);
    }

}
