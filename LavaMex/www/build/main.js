webpackJsonp([8],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paquete_paquete__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarioPage = (function () {
    function CalendarioPage(navCtrl, navParams, alertCtrl, calendar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.calendar = calendar;
        this.lat = 0;
        this.lon = 0;
        this.vehiculo = "";
        this.fechasel = "";
    }
    CalendarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarioPage');
        this.id = this.navParams.get('id');
        this.ip = this.navParams.get('ip');
        this.lon = this.navParams.get('lon');
        this.lat = this.navParams.get('lat');
        this.vehiculo = this.navParams.get('vehiculo');
        //this.alerta();
        this.horarios = [{ hora: 9, dis: 0 }, { hora: 11, dis: 2 }, { hora: 13, dis: 0 }, { hora: 15, dis: 0 }, { hora: 17, dis: 1 }];
        this.date = new Date();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
        this.fechasel = this.currentDate + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
    };
    CalendarioPage.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'na',
            buttons: ['OK']
        });
        alert.setTitle("Datos del lavado");
        alert.setMessage('[Coche: ' + this.vehiculo + ']; [Latitud: ' + this.lat + ']; [Longitud: ' + this.lon + '];');
        alert.present();
    };
    CalendarioPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var j = 0; j < thisNumOfDays; j++) {
            this.daysInThisMonth.push(j + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        // var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var k = 0; k < (6 - lastDayThisMonth); k++) {
            this.daysInNextMonth.push(k + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var l = (7 - lastDayThisMonth); l < ((7 - lastDayThisMonth) + 7); l++) {
                this.daysInNextMonth.push(l);
            }
        }
    };
    CalendarioPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    CalendarioPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    CalendarioPage.prototype.selectDate = function (day) {
        this.currentDate = day;
    };
    CalendarioPage.prototype.selectHour = function (hora) {
        this.horariosel = hora;
    };
    CalendarioPage.prototype.confirmar = function () {
        this.fechasel = this.currentDate + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
        this.dia = this.currentDate;
        this.mes = this.date.getMonth() + 1;
        this.ano = this.date.getFullYear();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__paquete_paquete__["a" /* PaquetePage */], {
            lat: this.lat, lon: this.lon, vehiculo: this.vehiculo, horario: this.horariosel,
            fecha: this.fechasel, id: this.id, day: this.dia, month: this.mes, year: this.ano, ip: this.ip
        });
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendario',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/calendario/calendario.html"*/'<!--\n  Generated template for the CalendarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Fecha y hora</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="confirmar()">\n        <span style="color:#4caf50;font-weight: bold;">Siguiente</span>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="agenda">\n\n	<div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Do</ion-col>\n        <ion-col>Lu</ion-col>\n        <ion-col>Ma</ion-col>\n        <ion-col>Mi</ion-col>\n        <ion-col>Ju</ion-col>\n        <ion-col>Vi</ion-col>\n        <ion-col>Sa</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="goToLastMonth()">{{lastDay}}</ion-col>\n        <ion-col col-1 *ngFor="let day of daysInThisMonth" id="dia" (click)="selectDate(day)">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">\n            {{day}}<br>\n            <div class="event-bullet"></div>\n          </ng-template>\n        </ion-col>\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth()">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <br>\n  <ion-grid>\n    <div *ngFor="let horario of horarios">\n\n      <ion-row class="horario0" *ngIf="horariosel === horario.hora">\n        <ion-col (click)="selectHour(horario.hora)"><b>{{horario.hora}}:00</b> <br> {{horario.hora+1}}:00</ion-col>\n        <ion-col (click)="selectHour(horario.hora)" class="lib" *ngIf="horario.dis === 0">Libre</ion-col>\n        <ion-col (click)="selectHour(horario.hora)" class="no" #noDis *ngIf="horario.dis === 1">No Disponible</ion-col>\n        <ion-col (click)="selectHour(horario.hora)" class="con" #enCon *ngIf="horario.dis === 2">En Confirmación</ion-col>\n      </ion-row>\n\n      <ion-row class="horario" *ngIf="horariosel != horario.hora">\n        <ion-col (click)="selectHour(horario.hora)"><b>{{horario.hora}}:00</b> <br> {{horario.hora+1}}:00</ion-col>\n        <ion-col (click)="selectHour(horario.hora)" class="lib" *ngIf="horario.dis === 0">Libre</ion-col>\n        <ion-col (click)="selectHour(horario.hora)" class="no" #noDis *ngIf="horario.dis === 1">No Disponible</ion-col>\n        <ion-col (click)="selectHour(horario.hora)" class="con" #enCon *ngIf="horario.dis === 2">En Confirmación</ion-col>\n      </ion-row>\n\n    </div>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/calendario/calendario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaquetePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pago_pago__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_web_service_web_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PaquetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaquetePage = (function () {
    function PaquetePage(navCtrl, navParams, alertCtrl, webService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.webService = webService;
        this.lat = 0;
        this.lon = 0;
        this.vehiculo = "";
    }
    PaquetePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaquetePage');
        this.id = this.navParams.get('id');
        this.ip = this.navParams.get('ip');
        this.lon = this.navParams.get('lon');
        this.lat = this.navParams.get('lat');
        this.vehiculo = this.navParams.get('vehiculo');
        this.horario = this.navParams.get('horario');
        this.fecha = this.navParams.get('fecha');
        this.day = this.navParams.get('day');
        this.month = this.navParams.get('month');
        this.year = this.navParams.get('year');
        //this.alerta();
    };
    PaquetePage.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'na',
            buttons: ['OK']
        });
        alert.setTitle("Datos del lavado");
        alert.setMessage('[Coche: ' + this.vehiculo + ']; [Latitud: ' + this.lat + ']; [Longitud: ' + this.lon + ']; [Fecha: ' + this.fecha + ']; [Horario: ' + this.horario + ':00];');
        alert.present();
    };
    PaquetePage.prototype.selPaquete = function (paq) {
        this.paquete = paq;
    };
    PaquetePage.prototype.selPago = function (pag) {
        this.metPago = pag;
    };
    PaquetePage.prototype.confirmar = function () {
        if (this.metPago == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pago_pago__["a" /* PagoPage */], {
                lat: this.lat, lon: this.lon, vehiculo: this.vehiculo, horario: this.horario,
                fecha: this.fecha, paquete: this.paquete, metPago: this.metPago, id: this.id
            });
        }
        else {
            var pago = void 0;
            if (this.metPago == 1) {
                pago = "efectivo";
            }
            else {
                pago = "tarjeta";
            }
            var tipo = void 0;
            if (this.paquete == 1) {
                tipo = "express";
            }
            if (this.paquete == 2) {
                tipo = "plus";
            }
            if (this.paquete == 3) {
                tipo = "pro";
            }
            if (this.paquete == 4) {
                tipo = "premium";
            }
            var date = new Date(this.year, this.month, this.day, this.horario, 0, 0, 0);
            this.lavado = { ubicacion: { latitud: this.lat, longitud: this.lon }, fecha: date, tipo: tipo, pago: pago, status: 'espera', _idUsuario: this.id };
            this.webService.registrarLavado(this.lavado, this.ip);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { alert: true, ip: this.ip, id: this.id });
        }
    };
    PaquetePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paquete',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/paquete/paquete.html"*/'<!--\n  Generated template for the PaquetePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Paquete</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="confirmar()">\n        <span style="color:#4caf50;font-weight: bold;">Siguiente</span>\n      </button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="cuerpo">\n\n	<ion-grid>\n\n      <ion-row>\n\n        <ion-col id="nomar">\n        	<ion-row>\n	        	<ion-card id="nomar" [ngClass]="(paquete == 1) ? \'sel\' : \'nosel\'" (click)="selPaquete(1)">\n				  <img src="../assets/imgs/shine.png"/>\n				  <ion-card-content>\n				    <ion-card-title style="text-align: center;" [ngClass]="(paquete == 1) ? \'sel\' : \'nosel\'">\n				      Express\n				      </ion-card-title>\n				    <p style="text-align: center;" [ngClass]="(paquete == 1) ? \'sel\' : \'nosel\'">\n				      Lavado exterior con abrillantador.\n				    </p>\n				  </ion-card-content>\n				</ion-card>\n			</ion-row>\n			<ion-row [ngClass]="(paquete == 1) ? \'dis\' : \'nodis\'" style="margin-top: -22px;">\n				<ion-col>\n					<ion-card (click)="selPago(1)" [ngClass]="(metPago == 1) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="cash"></ion-icon>&nbsp;&nbsp;Efectivo\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n					<ion-card (click)="selPago(2)" [ngClass]="(metPago == 2) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="card" style=""></ion-icon>&nbsp;&nbsp;Paypal\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n				</ion-col>\n			</ion-row>\n        </ion-col>\n        <ion-col id="nomar">\n        	<ion-row>\n	        	<ion-card id="nomar" [ngClass]="(paquete == 2) ? \'sel\' : \'nosel\'" (click)="selPaquete(2)">\n				  <img src="../assets/imgs/shine.png"/>\n				  <ion-card-content>\n				    <ion-card-title style="text-align: center;" [ngClass]="(paquete == 2) ? \'sel\' : \'nosel\'">\n				      Plus\n				      </ion-card-title>\n				    <p style="text-align: center;" [ngClass]="(paquete == 2) ? \'sel\' : \'nosel\'">\n				      Lavado exterior con abrillantador, aspirado interior (no incluye cajuela).\n				    </p>\n				  </ion-card-content>\n				</ion-card>\n			</ion-row>\n			<ion-row [ngClass]="(paquete == 2) ? \'dis\' : \'nodis\'" style="margin-top: -22px;">\n				<ion-col>\n					<ion-card (click)="selPago(1)" [ngClass]="(metPago == 1) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="cash"></ion-icon>&nbsp;&nbsp;Efectivo\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n					<ion-card (click)="selPago(2)" [ngClass]="(metPago == 2) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="card" style=""></ion-icon>&nbsp;&nbsp;Paypal\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n				</ion-col>\n			</ion-row>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col id="nomar">\n        	<ion-row>\n	        	<ion-card id="nomar" [ngClass]="(paquete == 3) ? \'sel\' : \'nosel\'" (click)="selPaquete(3)">\n				  <img src="../assets/imgs/shine.png"/>\n				  <ion-card-content>\n				    <ion-card-title style="text-align: center;" [ngClass]="(paquete == 3) ? \'sel\' : \'nosel\'">\n				      Pro\n				      </ion-card-title>\n				    <p style="text-align: center;" [ngClass]="(paquete == 3) ? \'sel\' : \'nosel\'">\n				      Lavado exterior con abrillantador, encerado, aspirado interior (incluye cajuela).\n				    </p>\n				  </ion-card-content>\n				</ion-card>\n			</ion-row>\n			<ion-row [ngClass]="(paquete == 3) ? \'dis\' : \'nodis\'" style="margin-top: -22px;">\n				<ion-col>\n					<ion-card (click)="selPago(1)" [ngClass]="(metPago == 1) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="cash"></ion-icon>&nbsp;&nbsp;Efectivo\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n					<ion-card (click)="selPago(2)" [ngClass]="(metPago == 2) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="card" style=""></ion-icon>&nbsp;&nbsp;Paypal\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n				</ion-col>\n			</ion-row>\n        </ion-col>\n\n        <ion-col id="nomar">\n        	<ion-row>\n	        	<ion-card id="nomar" [ngClass]="(paquete == 4) ? \'sel\' : \'nosel\'" (click)="selPaquete(4)">\n				  <img src="../assets/imgs/shine.png"/>\n				  <ion-card-content>\n				    <ion-card-title style="text-align: center;" [ngClass]="(paquete == 4) ? \'sel\' : \'nosel\'">\n				      Premium\n				      </ion-card-title>\n				    <p style="text-align: center;" [ngClass]="(paquete == 4) ? \'sel\' : \'nosel\'">\n				      Lavado exterior con abrillantador, pulido y encerado, lavado motor, aspirado interior (incluye cajuela).\n				    </p>\n				  </ion-card-content>\n				</ion-card>\n			</ion-row>\n			<ion-row [ngClass]="(paquete == 4) ? \'dis\' : \'nodis\'" style="margin-top: -22px;">\n				<ion-col>\n					<ion-card (click)="selPago(1)" [ngClass]="(metPago == 1) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="cash"></ion-icon>&nbsp;&nbsp;Efectivo\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n					<ion-card (click)="selPago(2)" [ngClass]="(metPago == 2) ? \'ver\' : \'nover\'">\n						<ion-card-content>\n						    <ion-card-title style="font-size:16px;" >\n						      &nbsp;&nbsp;<ion-icon name="card" style=""></ion-icon>&nbsp;&nbsp;Paypal\n						      </ion-card-title>\n						  </ion-card-content>\n					</ion-card>\n				</ion-col>\n			</ion-row>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/paquete/paquete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_web_service_web_service__["a" /* WebServiceProvider */]])
    ], PaquetePage);
    return PaquetePage;
}());

//# sourceMappingURL=paquete.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_service_web_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PagoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagoPage = (function () {
    function PagoPage(navCtrl, navParams, alertCtrl, webService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.webService = webService;
        this.lat = 0;
        this.lon = 0;
        this.vehiculo = "";
    }
    PagoPage.prototype.ionViewDidLoad = function () {
        this.lon = this.navParams.get('lon');
        this.lat = this.navParams.get('lat');
        this.vehiculo = this.navParams.get('vehiculo');
        this.horario = this.navParams.get('horario');
        this.fecha = this.navParams.get('fecha');
        this.paquete = this.navParams.get('paquete');
        this.metPago = this.navParams.get('metPago');
        this.alerta();
    };
    PagoPage.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'na',
            buttons: ['OK']
        });
        alert.setTitle("Datos del lavado");
        alert.setMessage('[Coche: ' + this.vehiculo + ']; [Latitud: ' + this.lat + ']; [Longitud: ' + this.lon + ']; [Fecha: ' + this.fecha + ']; [Horario: ' + this.horario + ':00]; [Paquete: ' + this.paquete + ']; [Metodo de Pago: ' + this.metPago + ']; ');
        alert.present();
    };
    PagoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pago',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/pago/pago.html"*/'<!--\n  Generated template for the PagoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pago</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/pago/pago.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_web_service_web_service__["a" /* WebServiceProvider */]])
    ], PagoPage);
    return PagoPage;
}());

//# sourceMappingURL=pago.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialPage = (function () {
    function HistorialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialPage');
    };
    HistorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historial',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/historial/historial.html"*/'<!--\n  Generated template for the HistorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>historial</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/historial/historial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HistorialPage);
    return HistorialPage;
}());

//# sourceMappingURL=historial.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_service_web_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inicio_inicio__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrarPage = (function () {
    function RegistrarPage(navCtrl, navParams, webService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webService = webService;
        this.alertCtrl = alertCtrl;
        this.user = { nombre: '', correo: '', celular: '', pass: '', carros: { placa: '', modelo: '', color: '', marca: '' } };
    }
    RegistrarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegistrarPage');
        console.log(this.user.nombre);
        this.ip = this.navParams.get('ip');
        this.webService.getUsers(this.ip)
            .subscribe(function (data) {
            _this.users = data;
            console.log(Object.keys(data).length);
        }, function (error) {
            console.error(error);
        });
    };
    RegistrarPage.prototype.saveUsr = function () {
        console.log("Paso 1______" + this.user.carros.placa);
        this.webService.saveUser(this.user, this.ip);
        this.regresar();
    };
    RegistrarPage.prototype.regresar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__inicio_inicio__["a" /* InicioPage */], { alerta: true });
    };
    RegistrarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrar',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/registrar/registrar.html"*/'<!--\n  Generated template for the RegistrarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>registrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>User List</h2>\n\n  <ion-list>\n    <ion-item *ngFor="let u of users">\n      {{u.nombre}}\n    </ion-item>\n  </ion-list>\n\n  <div>\n  	<h2>Add User</h2>\n	  <form (ngSubmit)="saveUsr()">\n	    <ion-item>\n	      <ion-label>Nombre</ion-label>\n	      <ion-input type="text" [(ngModel)]="user.nombre" name="nombre"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Correo</ion-label>\n	      <ion-input type="email" [(ngModel)]="user.correo" name="correo"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Celular</ion-label>\n	      <ion-input type="text" [(ngModel)]="user.celular" name="celular"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Contraseña</ion-label>\n	      <ion-input type="password" [(ngModel)]="user.pass" name="pass"></ion-input>\n	    </ion-item>\n	    <br>\n	    <h2>Vehículo</h2>\n	    <ion-item>\n	      <ion-label>Marca</ion-label>\n	      <ion-input type="text" [(ngModel)]="user.carros.marca" name="caMarca"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Modelo</ion-label>\n	      <ion-input type="text" [(ngModel)]="user.carros.modelo" name="caModelo"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Placa</ion-label>\n	      <ion-input type="text" [(ngModel)]="user.carros.placa" name="caPlaca"></ion-input>\n	    </ion-item>\n	    <ion-item>\n	      <ion-label>Color</ion-label>\n	      <ion-input type="text" [(ngModel)]="user.carros.color" name="caColor"></ion-input>\n	    </ion-item>\n	    <button ion-button type="submit" block>Add User</button>\n	  </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/registrar/registrar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_web_service_web_service__["a" /* WebServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistrarPage);
    return RegistrarPage;
}());

//# sourceMappingURL=registrar.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_web_service_web_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, webs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webs = webs;
        this.correo = "";
        this.tel = "";
        this.pass = "";
        this.nombre = "";
        this.id = "";
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PerfilPage');
        this.webs.usuarioId()
            .subscribe(function (data) {
            var resul = data;
            console.log(resul.nombre);
            _this.correo = resul.correo;
            _this.tel = resul.celular;
            _this.pass = resul.pass;
            _this.nombre = "    Nombre:  " + resul.nombre;
            _this.id = "    Código:  " + resul._id;
        }, function (error) {
            console.error(error);
        });
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/perfil/perfil.html"*/'<ion-header >\n\n  <ion-navbar color="bluedark">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Mi Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n<ion-content scrollbar-x="false" scrollbar-y="false">\n	<div #per id="per" text-center>\n		<ion-icon #ic id="ic" name="person"></ion-icon>\n\n		<p>\n			<ion-input id="nom" readonly [(ngModel)]="nombre"></ion-input>\n			<ion-input id="Id" readonly [(ngModel)]="id"></ion-input>\n		</p>\n\n	</div> \n\n	<div #dat id="dat">\n\n		<ion-list>\n\n		  <ion-item id="in">\n		    <ion-label id="lab">Correo</ion-label>\n		    <ion-input id="lab2" [(ngModel)]="correo"></ion-input>\n		  </ion-item>\n\n		  <ion-item id="in">\n		    <ion-label id="lab">Teléfono</ion-label>\n		    <ion-input id="lab2" type="number" [(ngModel)]="tel"></ion-input>\n		  </ion-item>\n\n		  <ion-item id="in">\n		    <ion-label id="lab">Contraseña</ion-label>\n		    <ion-input id="lab2" type="password" [(ngModel)]="pass"></ion-input>\n		  </ion-item>\n\n		</ion-list>\n\n		<div padding>\n		  <button ion-button full #sol id="sol" color="teal" (click)="guardar()">Guardar</button>\n		</div>\n\n	</div>\n  \n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/perfil/perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_web_service_web_service__["a" /* WebServiceProvider */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehiculosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VehiculosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VehiculosPage = (function () {
    function VehiculosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VehiculosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VehiculosPage');
    };
    VehiculosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vehiculos',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/vehiculos/vehiculos.html"*/'<ion-header >\n\n  <ion-navbar color="bluedark">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>Vehículos</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="centrar()"><ion-icon name="expand" style="font-size: 22px;"></ion-icon></button>\n      <button ion-button (click)="addMarker()"><ion-icon name="flag" style="font-size: 22px;"></ion-icon></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  id="vehi" padding>\n\n	<ion-card>\n\n	  <ion-card-header id="tit">\n	    <b>Agregados</b>\n	  </ion-card-header>\n\n	  <ion-list>\n	    <button ion-item>\n	      <ion-icon name="car" item-start></ion-icon>\n	      Nissan\n	      <ion-icon name="ios-arrow-forward-outline" item-end></ion-icon>\n	    </button>\n\n	    <hr>\n\n	    <button ion-item>\n	      <ion-icon name="bus" item-start></ion-icon>\n	      BMW\n	      <ion-icon name="ios-arrow-forward-outline" item-end></ion-icon>\n	    </button>\n\n	    <hr>\n\n	    <button ion-item>\n	      <ion-icon name="car" item-start></ion-icon>\n	      Tesla\n	      <ion-icon name="ios-arrow-forward-outline" item-end></ion-icon>\n	    </button>\n\n	    <button ion-item color="teal" outline id="agregar">\n		    <ion-icon name="add" item-start></ion-icon>\n		    Nuevo\n		</button>\n\n	  </ion-list>\n\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/vehiculos/vehiculos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], VehiculosPage);
    return VehiculosPage;
}());

//# sourceMappingURL=vehiculos.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendario/calendario.module": [
		290,
		7
	],
	"../pages/historial/historial.module": [
		291,
		6
	],
	"../pages/inicio/inicio.module": [
		292,
		5
	],
	"../pages/pago/pago.module": [
		293,
		4
	],
	"../pages/paquete/paquete.module": [
		294,
		3
	],
	"../pages/perfil/perfil.module": [
		295,
		2
	],
	"../pages/registrar/registrar.module": [
		296,
		1
	],
	"../pages/vehiculos/vehiculos.module": [
		297,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historial_historial__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_vehiculos_vehiculos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_perfil_perfil__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_inicio_inicio__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendario_calendario__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_paquete_paquete__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pago_pago__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registrar_registrar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_web_service_web_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_global_global__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_vehiculos_vehiculos__["a" /* VehiculosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_paquete_paquete__["a" /* PaquetePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pago_pago__["a" /* PagoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registrar_registrar__["a" /* RegistrarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historial/historial.module#HistorialPageModule', name: 'HistorialPage', segment: 'historial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pago/pago.module#PagoPageModule', name: 'PagoPage', segment: 'pago', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paquete/paquete.module#PaquetePageModule', name: 'PaquetePage', segment: 'paquete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfil/perfil.module#PerfilPageModule', name: 'PerfilPage', segment: 'perfil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vehiculos/vehiculos.module#VehiculosPageModule', name: 'VehiculosPage', segment: 'vehiculos', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_historial_historial__["a" /* HistorialPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_vehiculos_vehiculos__["a" /* VehiculosPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_paquete_paquete__["a" /* PaquetePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_pago_pago__["a" /* PagoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_registrar_registrar__["a" /* RegistrarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_calendar__["a" /* Calendar */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_web_service_web_service__["a" /* WebServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_historial_historial__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_vehiculos_vehiculos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Lavado', ic: 'water', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Historial', ic: 'time', component: __WEBPACK_IMPORTED_MODULE_5__pages_historial_historial__["a" /* HistorialPage */] },
            { title: 'Vehiculos', ic: 'car', component: __WEBPACK_IMPORTED_MODULE_6__pages_vehiculos_vehiculos__["a" /* VehiculosPage */] },
            { title: 'Mi Perfil', ic: 'person', component: __WEBPACK_IMPORTED_MODULE_7__pages_perfil_perfil__["a" /* PerfilPage */] },
            { title: 'Cerrar sesión', ic: 'log-out', component: __WEBPACK_IMPORTED_MODULE_8__pages_inicio_inicio__["a" /* InicioPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="bluedark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.ic}}">&nbsp;&nbsp;</ion-icon>{{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_global__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebServiceProvider = (function () {
    function WebServiceProvider(http, globi) {
        this.http = http;
        this.globi = globi;
        this.apiUrl = 'http://192.168.1.109:3000';
        console.log('Hello WebServiceProvider Provider');
    }
    WebServiceProvider.prototype.getUsers = function (ip) {
        return this.http.get('http://' + ip + ':3000/usuarios');
    };
    WebServiceProvider.prototype.iniciarSesion = function (correo, pass, ip) {
        console.log(ip);
        return this.http.get('http://' + ip + ':3000/usuario/validar?correo=' + correo + '&pass=' + pass);
    };
    WebServiceProvider.prototype.registrarLavado = function (data, ip) {
        var req = this.http.post('http://' + ip + ':3000/lavados', data)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    WebServiceProvider.prototype.saveUser = function (data, ip) {
        var req = this.http.post('http://' + ip + ':3000/usuarios', data)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log("Error occured");
        });
    };
    WebServiceProvider.prototype.usuarioId = function () {
        return this.http.get('http://' + this.globi.ip + ':3000/usuarioById/' + this.globi.id);
    };
    WebServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__global_global__["a" /* GlobalProvider */]])
    ], WebServiceProvider);
    return WebServiceProvider;
}());

//# sourceMappingURL=web-service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendario_calendario__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, alertCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.address = '';
        this.lat = 0;
        this.lon = 0;
        this.vehiculo = "";
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.id = this.navParams.get('id');
        this.ip = this.navParams.get('ip');
        if (this.navParams.get('alert')) {
            this.alerta();
        }
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.lat = position.coords.latitude;
            _this.lon = position.coords.longitude;
            var mapOptions = {
                center: latLng,
                zoom: 4,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.centrar = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.lat = position.coords.latitude;
            _this.lon = position.coords.longitude;
            _this.map.setZoom(20);
            _this.map.panTo(latLng);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.centrar2 = function (latLng) {
        this.lat = latLng.lat();
        this.lon = latLng.lng();
        this.map.setZoom(20);
        this.map.panTo(latLng);
    };
    HomePage.prototype.alerta = function () {
        var alert = this.alertCtrl.create({
            title: 'na',
            buttons: ['OK']
        });
        alert.setTitle("Solicitud completada!");
        alert.setMessage('Puedes ver los lavados agendados en el apartado de Historial.');
        alert.present();
    };
    HomePage.prototype.buscar = function () {
        var vm = this;
        vm.geocoder = new google.maps.Geocoder();
        var lanLng = this.geocoder.geocode({ 'address': this.address,
            'componentRestrictions': { country: 'MX' } }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                vm.centrar2(results[0].geometry.location);
            }
            else {
            }
        });
        lanLng = 0;
    };
    HomePage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    };
    HomePage.prototype.solicitarL = function () {
        var latLng = this.map.getCenter();
        this.lat = latLng.lat();
        this.lon = latLng.lng();
        //this.alerta();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calendario_calendario__["a" /* CalendarioPage */], {
            lat: this.lat, lon: this.lon, vehiculo: this.vehiculo, id: this.id, ip: this.ip
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'home-page',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/home/home.html"*/'<ion-header >\n\n  <ion-navbar color="bluedark">\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>V Shine</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="centrar()"><ion-icon name="expand" style="font-size: 22px;"></ion-icon></button>\n      <button ion-button (click)="addMarker()"><ion-icon name="flag" style="font-size: 22px;"></ion-icon></button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <button ion-button (click)="buscar()" color="blue" outline #In3 id="In3">\n    <ion-icon name="search"></ion-icon>\n  </button>\n\n  <ion-input placeholder="Lat" type="hidden" #In1 id="In1" [(ngModel)]="lat"></ion-input>\n\n  <ion-input placeholder="Long" type="hidden" #In2 id="In2" [(ngModel)]="lon"></ion-input>\n\n  <ion-input placeholder="Buscar dirección" color="blue" outline type="text" #In4 id="In4" [(ngModel)]="address"></ion-input>\n\n  <div #map id="map"></div> \n\n  <ion-icon #centr id="centr" name="ios-locate-outline"></ion-icon>\n\n  <div>\n    <ion-list>\n      <ion-item id="coc">\n        <ion-label>Vehiculo</ion-label>\n        <ion-select [(ngModel)]="vehiculo" id="sel">\n          <ion-option value="Nissan">Nissan</ion-option>\n          <ion-option value="BMW">BMW</ion-option>\n          <ion-option value="Tesla">Tesla</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  \n    <button ion-button #sol id="sol" color="green" (click)="solicitarL()">Confirmar</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_web_service_web_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registrar_registrar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioPage = (function () {
    function InicioPage(navCtrl, navParams, webService, alertCtrl, globi, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.webService = webService;
        this.alertCtrl = alertCtrl;
        this.globi = globi;
        this.fb = fb;
        this.user = { nombre: '', correo: '', celular: '', pass: '' };
        this.correo = "derdavid2010@gmail.com";
        this.pass = "dadi1809";
        this.ip = "localhost";
    }
    InicioPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad InicioPage ' + this.globi.ip);
        if (this.navParams.get('alerta')) {
            var prompt_1 = this.alertCtrl.create({
                title: '¡Ha sido registrado exitosamente!',
                message: "Ahora puede iniciar sesion."
            });
            prompt_1.present();
        }
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('Saved clicked ' + data.title);
                        _this.ip = data.title;
                    }
                }
            ]
        });
        //prompt.present();
        this.globi.ip = this.ip;
    };
    InicioPage.prototype.entrar = function () {
        var _this = this;
        this.webService.iniciarSesion(this.correo, this.pass, this.ip)
            .subscribe(function (data) {
            if (Object.keys(data).length != 0) {
                _this.globi.id = data[0]._id;
                console.log(_this.globi.ip + ' ' + _this.globi.id);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { id: data[0]._id, ip: _this.ip });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: 'na',
                    buttons: ['OK']
                });
                alert_1.setTitle("Correo y/o contraseña incorrectos");
                alert_1.present();
            }
        }, function (error) {
            console.error(error);
        });
    };
    InicioPage.prototype.registrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__registrar_registrar__["a" /* RegistrarPage */], { ip: this.ip });
    };
    InicioPage.prototype.loginfb = function () {
        var _this = this;
        this.fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            if (res.status === "connected") {
                _this.getUserDetail(res.authResponse.userID);
            }
            else {
            }
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    InicioPage.prototype.getUserDetail = function (userid) {
        var _this = this;
        this.fb.api("/" + userid + "/?fields=id,email,name,picture,gender", ["public_profile"])
            .then(function (res) {
            console.log(res);
            var users = res;
            var prompt = _this.alertCtrl.create({
                title: 'Facebook:',
                message: "Nombre: " + users.name + "correo: " + users.email
            });
            prompt.present();
        })
            .catch(function (e) {
            console.log(e);
        });
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio',template:/*ion-inline-start:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/inicio/inicio.html"*/'<!--\n  Generated template for the InicioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content padding id="body">\n\n	<div padding text-center color="blue" id="tit">\n\n		<ion-img src="../assets/imgs/shine.png" style="background: transparent" id="logo"></ion-img>\n\n	</div>\n\n	<div padding>\n\n		<ion-list>\n\n		  <ion-item  id="in1">\n		    <ion-input type="text" placeholder="Correo" [(ngModel)]="correo"></ion-input>\n		  </ion-item>\n\n		  <ion-item  id="in2">\n		    <ion-input type="password" placeholder="Contraseña" [(ngModel)]="pass"></ion-input>\n		  </ion-item>\n\n		</ion-list>\n\n	    <button ion-button full id="en" (click)="entrar()"><b>Iniciar Sesión</b></button>\n\n	</div>\n\n	<div padding text-center>\n\n		<b>¿Eres nuevo? <a (click)="registrar()">Regístrate</a></b>\n\n	</div>\n\n	<div text-center>\n\n		<b>O</b>\n\n	</div>\n\n	<div padding text-center>\n\n		<button ion-button full id="sol" (click)="loginfb()">Ingresar con Facebook</button>\n\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/derdavid2010/Documentos/LavaMex/LavaMex/src/pages/inicio/inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_web_service_web_service__["a" /* WebServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = (function () {
    function GlobalProvider(http) {
        this.http = http;
        console.log('Hello GlobalProvider Provider');
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map