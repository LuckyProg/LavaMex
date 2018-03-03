import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WebServiceProvider } from '../../providers/web-service/web-service';
import { RegistrarPage } from '../registrar/registrar';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  user: any = {nombre:'',correo:'',celular:'',pass:''};
  correo: any;
  pass: any;
  ip: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad InicioPage');

    if(this.navParams.get('alerta')){
      let prompt = this.alertCtrl.create({
        title: '¡Ha sido registrado exitosamente!',
        message: "Ahora puede iniciar sesion."
      });
      prompt.present();
    }

    this.ip = "localhost";

  }

  entrar(){
    this.webService.iniciarSesion(this.correo, this.pass, this.ip)
      .subscribe(
        (data) => { // Success
          if(Object.keys(data).length!=0){
            this.navCtrl.setRoot(HomePage);
          }
          else{
            let alert = this.alertCtrl.create({
              title: 'na',
              buttons: ['OK']
            });
            alert.setTitle("Correo y/o contraseña incorrectos");
            alert.present();
          }
        },
        (error) =>{
          console.error(error);
        }
      );
  }

  registrar(){
    this.navCtrl.push(RegistrarPage, {ip: this.ip});
  }

}
