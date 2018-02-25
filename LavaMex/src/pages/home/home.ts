import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { CalendarioPage } from '../calendario/calendario';
 
declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  geocoder: any;
  address = '';
  lat = 0;
  lon = 0;
  vehiculo = "";
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
  	this.loadMap();
  	if(this.navParams.get('alert')){
  		this.alerta();
  	} 
  }
 
  	loadMap(){
 
	    this.geolocation.getCurrentPosition().then((position) => {
	 
	      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	      this.lat = position.coords.latitude;
	      this.lon = position.coords.longitude;
	 
	      let mapOptions = {
	        center: latLng,
	        zoom: 4,
	        disableDefaultUI: true,
	        mapTypeId: google.maps.MapTypeId.ROADMAP
	      }
	 
	      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	 
	    }, (err) => {
	      console.log(err);
	    });
 
  	}

  	centrar(){
  		this.geolocation.getCurrentPosition().then((position) => {
	 
	      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	      this.lat = position.coords.latitude;
	      this.lon = position.coords.longitude;
	 	  
	      this.map.setZoom(20);
	      this.map.panTo(latLng);
	 
	    }, (err) => {
	      console.log(err);
	    });
  	}

  	centrar2(latLng:any){
  		  this.lat = latLng.lat();
	      this.lon = latLng.lng();
	      this.map.setZoom(20);
	      this.map.panTo(latLng);
  	}

  	alerta(){
  		let alert = this.alertCtrl.create({
		    title: 'na',
		    buttons: ['OK']
		  });
		  alert.setTitle("Solicitud completada!");
		  alert.setMessage('Puedes ver los lavados agendados en el apartado de Historial.');
          alert.present();
  	}

  	buscar(){
  		  
		  var vm = this;
		  vm.geocoder = new google.maps.Geocoder(); 
	      let lanLng = this.geocoder.geocode( { 'address': this.address, 
	      'componentRestrictions': {country: 'MX'}}, function(results, status) {
          	if (status == google.maps.GeocoderStatus.OK) {
           	 vm.centrar2(results[0].geometry.location);
          	} else {
            }
          });
          lanLng = 0;
           	 
  	}

  	addMarker(){
 
	  let marker = new google.maps.Marker({
	    map: this.map,
	    animation: google.maps.Animation.DROP,
	    position: this.map.getCenter()
	  });
	  marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
	 
	}

	solicitarL(){
		let latLng = this.map.getCenter()
		this.lat = latLng.lat();
	    this.lon = latLng.lng();
		//this.alerta();
		this.navCtrl.push(CalendarioPage, {
		    lat: this.lat, lon: this.lon, vehiculo: this.vehiculo
		});
	}
 
}