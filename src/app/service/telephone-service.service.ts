import {Injectable} from '@angular/core';
import {CameraPhoto, CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {Contacts, Contact, ContactField, ContactName} from '@ionic-native/contacts/ngx';

@Injectable({
    providedIn: 'root'
})
export class TelephoneServiceService {

    constructor(private contacts: Contacts) {
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

    recupererCache(key: string): Promise<{ value: string }> {
        return Plugins.Storage.get({key});
    }

    ajouterContact(presentateur) {
        this.contacts.find(['name']).then((result) => {
            if (!result.find((contact) => contact.name === presentateur.name)) {
                const contact = this.contacts.create();
                contact.name = new ContactName(null, presentateur.name);
                contact.save();
            }
        });


    }
}
