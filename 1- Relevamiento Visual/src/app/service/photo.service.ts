import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { HttpClient } from "@angular/common/http";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Imagen } from "../model/Imagen";
import { filter, map} from 'rxjs/operators';
import {AuthService } from '../service/auth.service';

@Injectable({
  providedIn: "root",
})
export class PhotoService {

  imagesRef: AngularFireList<Imagen>;

  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: 1,
    correctOrientation: true,
    allowEdit: false,
    sourceType: this.camera.PictureSourceType.CAMERA,
  };

  constructor(
    private camera: Camera,
    private db: AngularFireDatabase,
    private http: HttpClient,
    private authSvc: AuthService,
  ) {
    this.imagesRef = db.list("images");
    this.imagesRef.snapshotChanges().subscribe((x) => {});
  }

  tomarFoto(esLinda, uemail, uid) {
    this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;


    var imagen = this.crearImagen(base64Image, esLinda, uemail, uid);
    this.imagesRef.push(imagen);

    }, (err) => {
     // Handle error
    });

    // this.http
    //   .get(
    //     "https://login-742f5.firebaseio.com/images/-MIvYFC7H4VXkdlXKnyR/image.json"
    //   )
    //   .subscribe((base64Image) => {
    //     var imagen = this.crearImagen(base64Image, esLinda, uemail, uid);
    //     this.imagesRef.push(imagen);
    //   });

      
  }

  
  crearImagen(base64Image, esLinda, uemail, uid) {
    var aGuardar = new Imagen();

    aGuardar.image = base64Image;
    aGuardar.esLinda = esLinda;
    aGuardar.fecha = new Date().getTime().toString();    
    aGuardar.uemail = uemail;
    aGuardar.uid = uid;
    aGuardar.votos = null;

    return aGuardar;
  }

  GetAllImages() {
    return this.imagesRef.snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    )
    .pipe(
      map(images => {
        return images.sort((a, b) => {
          return  parseFloat(b.fecha) - parseFloat(a.fecha);
        });
      })
    );
  }

  GetAllImagesLindas() {
    return this.GetAllImages().pipe(
      map(resp =>{
        return resp.filter((r:any) =>{
          return r.esLinda;
        });
      })
    )
  }

  GetAllImagesFeas() {
    return this.GetAllImages().pipe(
      map(resp =>{
        return resp.filter((r:any) =>{
          return !r.esLinda;
        });
      })
    )
  }

  Like(key, imagen){
    this.imagesRef.update(key, imagen);
  }



}
