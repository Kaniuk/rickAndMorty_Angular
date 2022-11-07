import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICharacter, IEpisode} from "../../interfaces";
import {CharacterService, EpisodeService,} from "../../services";

const getCharacterIdFromPath = (path: string) => path.split('/').pop();


@Component({
  selector: 'app-single-page-episode',
  templateUrl: './single-page-episode.component.html',
  styleUrls: ['./single-page-episode.component.css']
})
export class SinglePageEpisodeComponent implements OnInit {
  episode: IEpisode;
  characters: ICharacter[];

  constructor(private activatedRoute: ActivatedRoute, private episodeService: EpisodeService, private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episodeService.getById(id).subscribe(value => {
        this.episode = value;
        const {characters} = value;
        const charactersIds = characters.map(getCharacterIdFromPath) as string[];
        this.characterService.getById(charactersIds).subscribe(value => this.characters = value);
      });
    });
  }

}
