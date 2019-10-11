import { Component, OnInit } from '@angular/core';
import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.page.html',
  styleUrls: ['./telephone.page.scss'],
})
export class TelephonePage implements OnInit {

   detailsTelephone;
   connection;

  constructor() { }

  ngOnInit() {
    this.detailsTelephone = Plugins.Device.getInfo();
    this.connection = Plugins.Network.getStatus();
  }

}
