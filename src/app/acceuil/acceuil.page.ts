import { Component, OnInit } from '@angular/core';
import {DonneesService} from '../service/donnees.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.page.html',
  styleUrls: ['./acceuil.page.scss'],
})
export class AcceuilPage implements OnInit {

  imageDevFest = 'https://i.ytimg.com/vi/BMI5lxkoanc/maxresdefault.jpg';
  dateDebut: string;
  dateFin: string;
  constructor(private donneesService: DonneesService) { }



  ngOnInit() {
    this.donneesService.recupererDate().subscribe((scheduleTab) => {
      this.dateDebut = new Date(scheduleTab[0].date).toLocaleDateString();
      this.dateFin = new Date(scheduleTab[scheduleTab.length - 1].date).toLocaleDateString();
      console.log(localStorage.getItem('schedule'));
    });
  }


}
