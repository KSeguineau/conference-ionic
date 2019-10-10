import { Component, OnInit } from '@angular/core';
import {DonneesService} from '../service/donnees.service';
import {Router} from '@angular/router';
import Presentateur from '../models/Presentateur';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.page.html',
  styleUrls: ['./presentateurs.page.scss'],
})
export class PresentateursPage implements OnInit {

  presentateurTab: Presentateur[];

  constructor(private donneesService: DonneesService, private router: Router) { }


  ngOnInit() {
    this.donneesService.recupererPresentateurs().subscribe((presentateurTab) => this.presentateurTab = presentateurTab);
  }

  afficherDetails(id: number){
    this.router.navigate(['/devfest2018/presentateurs/' + id]);
  }

}
