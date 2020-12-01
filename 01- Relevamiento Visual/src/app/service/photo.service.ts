import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory,
  CameraPhoto, CameraSource} from '@capacitor/core';
import { rejects } from 'assert';
import { promise } from 'protractor';
import{Photo} from '../model/imagen';

const {Camera, Filesystem, Storage} = Plugins;
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  
  

  constructor() { }


  

}
