import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EpisodeRoutingModule} from './episode-routing.module';
import {EpisodesComponent} from './components/episodes/episodes.component';
import {EpisodeComponent} from './components/episode/episode.component';
import {EpisodeService} from "./services/episode.service";
import { SinglePageEpisodeComponent } from './components/single-page-episode/single-page-episode.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    SinglePageEpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ],
  exports: [
    EpisodeComponent,
    EpisodesComponent,
    SinglePageEpisodeComponent
  ],
  providers: [
    EpisodeService
  ]
})
export class EpisodeModule {
}
