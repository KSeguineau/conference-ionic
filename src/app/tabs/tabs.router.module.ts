import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'devfest2018',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../acceuil/acceuil.module').then(m => m.AcceuilPageModule)
          }
        ]
      },
      {
        path: 'sessions',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../sessions/sessions.module').then(m => m.SessionsPageModule)
          }
        ]
      },
      {
        path: 'presentateurs',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../presentateurs/presentateurs.module').then(m => m.PresentateursPageModule)
          }
        ]
      },
      {
        path: 'telephone',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../telephone/telephone.module').then(m => m.TelephonePageModule)
          }
        ]
      },
      { path: 'notes', loadChildren: () => import('../notes/notes.module').then(m => m.NotesPageModule) }
    ]
  },
  {
    path: '',
    redirectTo: '/devfest2018/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
