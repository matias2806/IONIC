import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { stringify } from "querystring";
import { empty } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}


  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async presentToastWithOptions(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: "bottom",
      duration: 2000,
    });
    toast.present();
  }


  async onLogin(email, password) {
    try {
      if (email.value != "" && password.value != "") {
        const user = await this.authSvc.login(email.value, password.value);
        if (user) {
          //para hacer chequear si email fue registrado
          console.log("User->", user);
          this.presentToast("Bienvenido");
          if (user.operationType == "signIn") {
             this.router.navigate([`/primera-pagina`]);
            console.log('Bienvenido');
            
          }
        }
      } else {
        this.presentToastWithOptions(
          "Debe ingresar el correo electrónico y su contraseña"
        );
      }
    } catch (error) {
      console.log("Error->", error);
      switch (error.message) {
        case "The email address is badly formatted.":
          this.presentToast("El correo electrónico no respeta el formato");
          break;
        case "The password is invalid or the user does not have a password.":
          this.presentToast("Contraseña incorrecta");
          break;
          case "There is no user record corresponding to this identifier. The user may have been deleted.":
          this.presentToast("Usuario no encontrado");
          break;
        default:
          this.presentToast(error.message);
          break;
      }
    }
  }

tipoUsuario(tipo, email, password) {
    switch (tipo) {
      case "admin":
        email.value = "admin@admin.com";
        password.value = "111111";
        break;
      case "invitado":
        email.value = "invitado@invitado.com";
        password.value = "222222";
        break;
      case "usuario":
        email.value = "usuario@usuario.com";
        password.value = "333333";
        break;
      case "anonimo":
        email.value = "anonimo@anonimo.com";
        password.value = "444444";
        break;
      case "tester":
        email.value = "tester@tester.com";
        password.value = "555555";
        break;

      default:
        break;
    }
  }
}
