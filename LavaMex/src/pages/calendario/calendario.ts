import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { PaquetePage } from '../paquete/paquete';

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {

  lat = 0;
  lon = 0;
  vehiculo = "";
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  isSelected: any;
  horarios: any;
  horariosel: any;
  fechasel: any = "";
  dia: any;
  mes: any;
  ano: any;
  id: any;
  ip: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private calendar: Calendar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarioPage');
    this.id = this.navParams.get('id');
    this.ip = this.navParams.get('ip');
    this.lon = this.navParams.get('lon'); 
    this.lat = this.navParams.get('lat'); 
    this.vehiculo = this.navParams.get('vehiculo'); 
	//this.alerta();
	this.horarios = [{hora: 9, dis: 0},{hora: 11, dis: 2},{hora: 13, dis: 0},{hora: 15, dis: 0},{hora: 17, dis: 1}];
	this.date = new Date();
    this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.getDaysOfMonth();
    this.fechasel = this.currentDate+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
  }

  	alerta(){
  		let alert = this.alertCtrl.create({
		    title: 'na',
		    buttons: ['OK']
		  });
		  alert.setTitle("Datos del lavado");
		  alert.setMessage('[Coche: '+this.vehiculo+']; [Latitud: '+this.lat+']; [Longitud: '+this.lon+'];');
          alert.present();
  	}

  	getDaysOfMonth() {
	    this.daysInThisMonth = new Array();
	    this.daysInLastMonth = new Array();
	    this.daysInNextMonth = new Array();
	    this.currentMonth = this.monthNames[this.date.getMonth()];
	    this.currentYear = this.date.getFullYear();
	    if(this.date.getMonth() === new Date().getMonth()) {
	      this.currentDate = new Date().getDate();
	    } else {
	      this.currentDate = 999;
	    }

	    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
	    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
	    for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
	      this.daysInLastMonth.push(i);
	    }

	    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
	    for (var j = 0; j < thisNumOfDays; j++) {
	      this.daysInThisMonth.push(j+1);
	    }

	    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
	    // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
	    for (var k = 0; k < (6-lastDayThisMonth); k++) {
	      this.daysInNextMonth.push(k+1);
	    }
	    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
	    if(totalDays<36) {
	      for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
	        this.daysInNextMonth.push(l);
	      }
	    }
	  }

	  goToLastMonth() {
	    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
	    this.getDaysOfMonth();
	  }

	  goToNextMonth() {
	    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
	    this.getDaysOfMonth();
	  }

	  selectDate(day) {
	    this.currentDate = day;
	  }

	  selectHour(hora: any){
	  	this.horariosel = hora;
	  }

	  confirmar(){
	  	this.fechasel = this.currentDate+"/"+(this.date.getMonth()+1)+"/"+this.date.getFullYear();
	  	this.dia = this.currentDate;
	    this.mes = this.date.getMonth()+1;
	    this.ano = this.date.getFullYear();
	  	this.navCtrl.push(PaquetePage, {
		    lat: this.lat, lon: this.lon, vehiculo: this.vehiculo, horario: this.horariosel, 
		    fecha: this.fechasel, id: this.id, day: this.dia, month: this.mes, year: this.ano, ip: this.ip
		});
	  }

}
