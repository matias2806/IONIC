import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { PhotoService } from '../service/photo.service';
import { Photo } from '../model/imagen';

@Component({
  selector: 'app-linda',
  templateUrl: './linda.page.html',
  styleUrls: ['./linda.page.scss'],
})
export class LindaPage implements OnInit {

  public photos: Photo[]= [];

  constructor(
    private camera: Camera,
    private photoSvc: PhotoService,
  ) {
   
   }

  ngOnInit() {
  }

 



}
