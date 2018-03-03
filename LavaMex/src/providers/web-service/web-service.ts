import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebServiceProvider {

  apiUrl: any = 'http://192.168.1.109:3000';
  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello WebServiceProvider Provider');
  }

  	getUsers(ip: any){
		return this.http.get('http://'+ip+':3000/usuarios');
	}

	iniciarSesion(correo: any, pass: any, ip: any){
		console.log(ip);
		return this.http.get('http://'+ip+':3000/usuario/validar?correo='+correo+'&pass='+pass);
	}

	saveUser(data: any, ip: any) {

		const req = this.http.post('http://'+ip+':3000/usuarios', data)
	      .subscribe(
	        res => {
	          console.log(res);
	        },
	        err => {
	          console.log("Error occured");
	        }
	      );
	}

}