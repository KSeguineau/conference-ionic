import {Component, Input, OnInit} from '@angular/core';
import Session from '../../models/Session';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details-session',
  templateUrl: './details-session.page.html',
  styleUrls: ['./details-session.page.scss'],
})
export class DetailsSessionPage implements OnInit {

  id: string;

  // Injection du service ActivatedRoute
  constructor(private route: ActivatedRoute, private router: Router) {


    this.id = route.snapshot.paramMap.get('id');
  }

  retour(){
    this.router.navigate(['/devfest2018/sessions']);
  }
  ngOnInit() {
  }

}
