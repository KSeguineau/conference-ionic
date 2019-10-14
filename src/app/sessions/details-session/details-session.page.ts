import {Component, Input, OnInit} from '@angular/core';
import Session from '../../models/Session';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DonneesService} from '../../service/donnees.service';
import {zip, Observable, of} from 'rxjs';
import Presentateur from '../../models/Presentateur';
import {flatMap, tap} from "rxjs/operators";

@Component({
    selector: 'app-details-session',
    templateUrl: './details-session.page.html',
    styleUrls: ['./details-session.page.scss'],
})
export class DetailsSessionPage implements OnInit {

  id: string;
  session: Observable<Session>;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute, private router: Router, private donneesService: DonneesService) {


  }

  detailsPresentateurs(id: number) {
    this.router.navigate(['/devfest2018/presentateurs/' + id]);

  }

  ajouterNotes() {
    this.router.navigate(['/devfest2018/notes/' + this.id]);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // récupération du paramètre id
      this.id = params.get('id');
      this.session = this.donneesService.recupererSessionsById(this.id);
      });

  }


}
