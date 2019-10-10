import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentateursPage } from './presentateurs.page';

const routes: Routes = [
  {
    path: '',
    component: PresentateursPage
  },
  { path: ':id', loadChildren: () =>
        import('./details-presentateur/details-presentateur.module').then(m => m.DetailsPresentateurPageModule) }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentateursPage]
})
export class PresentateursPageModule {}
