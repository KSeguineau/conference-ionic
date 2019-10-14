import {Injectable} from '@angular/core';
import {CameraPhoto, CameraResultType, CameraSource, Plugins} from '@capacitor/core';

@Injectable({
    providedIn: 'root'
})
export class TelephoneServiceService {

    constructor() {
    }

    prendrePhotos(): Promise<CameraPhoto> {
        return Plugins.Camera.getPhoto({resultType: CameraResultType.Base64, saveToGallery: true, source: CameraSource.Camera});
    }

    recupererPhotos(): Promise<CameraPhoto> {
        return Plugins.Camera.getPhoto({resultType: CameraResultType.Base64, source: CameraSource.Photos});
    }

    enregistrerCache(key: string, value: string): Promise<void> {
        return Plugins.Storage.set({key, value});
    }

    recupererCache(key: string): Promise<{value: string}> {
      return Plugins.Storage.get({key});
    }
}
