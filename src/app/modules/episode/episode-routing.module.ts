import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {SinglePageEpisodeComponent} from "./components/single-page-episode/single-page-episode.component";

const routes: Routes = [{
  path: '', component: EpisodesComponent,
}, {
  path: 'page/:page', component: EpisodesComponent,
}, {
  path: ':id', component: SinglePageEpisodeComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodeRoutingModule {
}
