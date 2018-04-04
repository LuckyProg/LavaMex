import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { WebServiceProvider } from '../../providers/web-service/web-service';
import { GlobalProvider } from '../../providers/global/global';
import { RegistrarPage } from '../registrar/registrar';
import { AlertController } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';

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
  correo: any = "derdavid2010@gmail.com";
  pass: any = "dadi1809";
  ip: any = "localhost";


  constructor(public navCtrl: NavController, public navParams: NavParams, public webService: WebServiceProvider, public alertCtrl: AlertController, public globi: GlobalProvider, private fb: Facebook) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad InicioPage '+this.globi.ip);

    if(this.navParams.get('alerta')){
      let prompt = this.alertCtrl.create({
        title: '¡Ha sido registrado exitosamente!',
        message: "Ahora puede iniciar sesion."
      });
      prompt.present();
    }
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Ingresa la IP",
      inputs: [
        {
          name: 'title',
          placeholder: 'IP'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked '+ data.title);
            this.ip = data.title;
          }
        }
      ]
    });
    //prompt.present();
    this.globi.ip = this.ip;
  }

  entrar(){
    this.webService.iniciarSesion(this.correo, this.pass, this.ip)
      .subscribe(
        (data) => { // Success
          if(Object.keys(data).length!=0){
            this.globi.id = data[0]._id;
            console.log(this.globi.ip+' '+this.globi.id);
            this.navCtrl.setRoot(HomePage, {id: data[0]._id, ip: this.ip});
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

  loginfb(){
    this.fb.login(['public_profile', 'user_friends', 'email'])
    .then(res => {
      if(res.status === "connected") {
        this.getUserDetail(res.authResponse.userID);
      } else {
      }
    })
    .catch(e => console.log('Error logging into Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        let users:any = res;
        let prompt = this.alertCtrl.create({
          title: 'Facebook:',
          message: "Nombre: "+users.name+"correo: "+users.email
        });
        prompt.present();
      })
      .catch(e => {
        console.log(e);
      });
  }

}
