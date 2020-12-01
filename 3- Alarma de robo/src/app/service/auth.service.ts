import { Injectable } from '@angular/core';
import {User } from '../shared/user.inteface';
import { AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) { }


  // No se necesarios por eso no los hago
  // async sendVerificationEmail():Promise<void>{}
  // async resetPassword():Promise<void>{}
  // async loginGoogle():Promise<User>{}
  // async register():Promise<User>{}


  // async login(email, password):Promise<User>{
  //   try {
  //     const {user} = await this.afAuth.signInWithEmailAndPassword(email, password);
  //   } catch (error) {
  //     console.log('Error->',error);
  //   }
  // }

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  
  }


  async logout():Promise<void>{
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error->',error);
      
    }
  }

  validaClave(clave:string){
    
  }

  usuarioActual(){
    return this.afAuth.currentUser;
  }
  
}
