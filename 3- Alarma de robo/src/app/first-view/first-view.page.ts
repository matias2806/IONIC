import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import {
  DeviceMotion,
  DeviceMotionAccelerationData,
} from "@ionic-native/device-motion/ngx";
import { Flashlight } from "@ionic-native/flashlight/ngx";
import { timer } from "rxjs";
import { Vibration } from "@ionic-native/vibration/ngx";
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-first-view",
  templateUrl: "./first-view.page.html",
  styleUrls: ["./first-view.page.scss"],
})
export class FirstViewPage implements OnInit {
  
  
  estado: string;
  alarma: boolean;
  sonido = new Audio();
  public accX;
  public accY;
  public accZ;
  private subscription;
  // sonAlarma = new Audio();//sirena Purga
  // sonAlarmaDer = new Audio();//epa epa epa que queres hacer
  // sonAlarmaIzq = new Audio();//ojo se estan robando el dispositivo
  // sonVerical = new Audio();//Se ah activado la linterna
  // sonHorizontal= new Audio(); //El celular esta horizontal
  

  constructor(
    private screenOrientation: ScreenOrientation,
    private deviceMotion: DeviceMotion,
    public flash: Flashlight,
    private vibration: Vibration,
    public alertController: AlertController,
    public authSvc : AuthService,
  ) {
    this.alarma = false;
  }

  ngOnInit(): void {
    // this.sonAlarma.src = '../../assets/audios/alarma5seg.mp3';
    // this.sonAlarmaDer.src = '../../assets/audios/derecha.mp3';
    // this.sonAlarmaIzq.src = '../../assets/audios/izquierda.mp3';
    // this.sonVerical.src = '../../assets/audios/linterna.mp3';
    // this.sonHorizontal.src = '../../assets/audios/horizontal.mp3';
    // this.sonido.src = '../../assets/audios/alarma5seg.mp3';
    // this.sonido.src = '../../assets/audios/derecha.mp3';
    // this.sonido.src = '../../assets/audios/izquierda.mp3';
    // this.sonido.src = '../../assets/audios/linterna.mp3';
    // this.sonido.src = '../../assets/audios/horizontal.mp3';
  }



  cambioEstado(x, y, z) {
    if (this.alarma) {
      this.sonido.src = "../../assets/audios/alarma5seg.mp3";
      this.sonido.load();
      this.sonido.play();
      
      // this.vibration.vibrate(5000);
      this.Accelerometer(x, y, z);
    } else {
      this.presentAlertPrompt();
      x.value = "apagado";
      y.value = "apagado";
      z.value = "apagado";
    }
  }

  Accelerometer(x, y, z) {
    let flag = true;
    let flagAcostado = false;
    let flagIzq = true;
    let flagDer = true;

    // Watch device acceleration
    this.subscription = this.deviceMotion
      .watchAcceleration({ frequency: 200 })
      .subscribe((acceleration: DeviceMotionAccelerationData) => {
        this.accX = acceleration.x;
        this.accY = acceleration.y;
        this.accZ = acceleration.z;

        x.value = acceleration.x;
        y.value = acceleration.y;
        z.value = acceleration.z;

        if ( this.accY < 1 && this.accX < 1 && this.accX > -1 && flagAcostado === true) {
          flagAcostado = false;
         
          timer(500).subscribe(() => {
            if (this.accX < 3) {
              this.sonido.src = "../../assets/audios/horizontal.mp3";
              this.sonido.load();
              this.sonido.play();
              this.vibration.vibrate(5000);
              flagAcostado = false;
            }
          });
        } 
        else if (this.accY > 5 || this.accX > 5 || (this.accX < -5 && flagAcostado === false) ) 
        {
          flagAcostado = true;
        }

        // vertical y linterna
        if (this.accY > 3 && flag == true) {
          flag = false;
          this.flash.switchOn();

          timer(5000).subscribe(() => {
            if (this.accY > 3) {
              flag = false;
              this.sonido.src = "../../assets/audios/linterna.mp3";
              this.sonido.load();
              this.sonido.play();

              this.flash.switchOff();
            }
          });
        } else if (this.accY < 3 && flag === false) {
          this.flash.switchOff();
          flag = true;
        }

        // izquierda
        if (this.accX > 3 && flagIzq === true) {
          flagIzq = false;
          timer(500).subscribe(() => {
            if (this.accX > 3) {
              flagIzq = false;
              this.sonido.src = "../../assets/audios/izquierda.mp3";
              this.sonido.load();
              this.sonido.play();
            }
          });

        } 
        else if (this.accX < 3 && flagIzq === false) {
          flagIzq = true;
        }



        // derecha
        if (this.accX < -3 && flagDer === true) {
          flagDer = false;
          timer(500).subscribe(() => {
            if (this.accX < -3) {
              flagDer = false;
              this.sonido.src = "../../assets/audios/derecha.mp3";
              this.sonido.load();
              this.sonido.play();
            }
          });
        } 
        else if (this.accX > -3 && flagDer === false) {
          flagDer = true;
        }

      });
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Por favor ingrese su clave!',
      inputs: [
        {
          name: 'clave',
          type: 'text',
          placeholder: 'ingrese su clave'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.alarma = true;
            console.log(' Cancel');
          }
        }, {
          text: 'Ok',
          handler: (clave) => {
            console.log('Confirm Ok');
            // console.log(clave.clave);
            //aca chequeo la pass
            this.authSvc.usuarioActual().then(user=>{
              this.authSvc.login(user.email, clave.clave );
            });
            
            
            
             
            // if(a =='2'){

            // }

          }
        }
      ]
    });

    await alert.present();
  }
  


}
