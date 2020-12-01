import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { User} from '../model/User';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) { }
  
  

  login(email:string, password:string){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  
  }

  darUsuario(){
    return this.afAuth.currentUser
  }

  // async  login(email:string, password:string){
  //   try {
  //     const user = await this.afAuth.signInWithEmailAndPassword(email, password);
  //     return user;
  //   } catch (error) {
      
  //     console.log('Error->',error);
  //   }
  // }

  async logout():Promise<void>{
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log('Error->',error);
      
    }
  }
}
