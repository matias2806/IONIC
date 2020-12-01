import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Imagen } from "../model/Imagen";
import { PhotoService } from "../service/photo.service";
import { Router } from "@angular/router";
import {AuthService } from '../service/auth.service';
import { voto } from '../model/voto';

@Component({
  selector: "app-linda",
  templateUrl: "./linda.page.html",
  styleUrls: ["./linda.page.scss"],
})
export class LindaPage implements OnInit {
  lista: Imagen[] = [];
  esLinda: Boolean;


  constructor(private PhotoSvc: PhotoService, private router: Router,
    private authSvc: AuthService,) {
    // this.PhotoSvc.GetAllImages().subscribe((resp) => {
    //   this.lista = resp;
    // });
    if(this.router.url == '/linda'){
      this.esLinda=true;
      this.PhotoSvc.GetAllImagesLindas().subscribe((resp) => {
        this.lista = resp;
      });
     
    }else{
      this.esLinda=false;
      this.PhotoSvc.GetAllImagesFeas().subscribe((resp) => {
        this.lista = resp;
      });

    }
     
    
  }

  ngOnInit() {}

  sacaFoto() {
    var auxEmail;
    var auxUi;
    this.authSvc.darUsuario().then(resp=>{
      auxEmail = resp.email;
      auxUi = resp.uid;
      this.PhotoSvc.tomarFoto(this.esLinda, auxEmail, auxUi);
     });

    // this.PhotoSvc.GetAllImages().subscribe((resp) => {
    //   this.lista = resp;
    // });
  }


  darVoto(item:Imagen){
    
    var auxUi;
    this.authSvc.darUsuario().then(resp=>{
      auxUi = resp.uid;


      var vt = new voto();
      vt.uid =auxUi;
      if(item.votos ==null){
       
       
        item.votos = new Array();
        item.votos.push(vt);
       
      }else{
        var flag :boolean = false;;
        item.votos.forEach(element => {
          
          if(element.uid == auxUi){
            flag=true;
          }
          
        });

        if(flag ==false){
          item.votos.push(vt);
        }

      }
  
      this.PhotoSvc.Like(item.key, item);
     });
    
  }

}
