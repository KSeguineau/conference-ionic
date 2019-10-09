import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'acceuil', loadChildren: './acceuil/acceuil.module#AcceuilPageModule' },
  { path: 'sessions', loadChildren: './sessions/sessions.module#SessionsPageModule' },
  { path: 'presentateurs', loadChildren: './presentateurs/presentateurs.module#PresentateursPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
