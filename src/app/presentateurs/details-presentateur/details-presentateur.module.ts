import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPresentateurPage } from './details-presentateur.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPresentateurPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPresentateurPage]
})
export class DetailsPresentateurPageModule {}
