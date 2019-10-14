import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {TelephoneServiceService} from '../service/telephone-service.service';
import {CameraPhoto} from '@capacitor/core';
import {Platform} from '@ionic/angular';


@Component({
    selector: 'app-notes',
    templateUrl: './notes.page.html',
    styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

    id: string;
    photos: CameraPhoto[] = [];
    notes: string;

    constructor(private route: ActivatedRoute, private telephoneService: TelephoneServiceService, public platform: Platform) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.id = params.get('id');
            this.telephoneService.recupererCache('note' + this.id)
                .then((result) => {
                    if (result.value) {
                        const notesPage: NotesPage = JSON.parse(result.value);
                        this.photos = notesPage.photos;
                        this.notes = notesPage.notes;
                    }
                });
        });
    }

    prendrePhotos() {
        this.telephoneService.prendrePhotos()
            .then((photos) => {
                this.photos.push(photos);
                this.enregistrerNotes();
            });
    }

    recupererPhotos() {
        this.telephoneService.recupererPhotos()
            .then((photos) => {
                this.photos.push(photos);
                this.enregistrerNotes();
            });
    }


    enregistrerNotes() {
        this.telephoneService.enregistrerCache('note' + this.id, JSON.stringify({id: this.id, notes: this.notes, photos: this.photos}));
    }

}
