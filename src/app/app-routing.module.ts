import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";


const routes: Routes = [
  {
    path: '', redirectTo: 'episodes', pathMatch: 'full',// component: MainLayoutComponent, // children: []
  },
  {
    path: 'episodes',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/episode/episode.module').then(value => value.EpisodeModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
