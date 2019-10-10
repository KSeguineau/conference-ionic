import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DonneesService} from "../../service/donnees.service";
import Presentateur from '../../models/Presentateur';
import {Observable} from 'rxjs';
import Session from '../../models/Session';

@Component({
    selector: 'app-details-presentateur',
    templateUrl: './details-presentateur.page.html',
    styleUrls: ['./details-presentateur.page.scss'],
})
export class DetailsPresentateurPage implements OnInit {

    id: number;
    presentateur: Observable<Presentateur>;
    sessions: Observable<Session[]>;

    constructor(private route: ActivatedRoute, private router: Router, private donneesService: DonneesService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            // récupération du paramètre id
            this.id = parseInt(params.get('id'), 10);
            this.presentateur = this.donneesService.recupererPresentateurById(this.id.toString());
            this.sessions = this.donneesService.recupererSessionsByIdPresentateur(this.id);
        });
    }

  detailsSessions(id: number) {
    this.router.navigate(['/devfest2018/sessions/' + id]);
  }

}
