import { Component, OnInit } from '@angular/core';
import {DonneesService} from '../service/donnees.service';
import Session from '../models/Session';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.page.html',
  styleUrls: ['./sessions.page.scss'],
})
export class SessionsPage implements OnInit {

  sessionTab: Session[];
  errorMessage: string;

  constructor(private donneesService: DonneesService, private router: Router) { }


  afficherDetails(id: number) {
    this.router.navigate(['/devfest2018/sessions/' + id]);
  }

  ngOnInit() {
    this.donneesService.recupererSessions().subscribe((sessions) => this.sessionTab = sessions,
        (err) => this.errorMessage = 'Impossible de récuperer les sessions');
  }

}
