import {Component, OnInit} from '@angular/core';

import {IEpisode, IPaginationInfo} from "../../interfaces";
import {EpisodeService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: IEpisode[];
  currentPage: number;
  pageInfo: IPaginationInfo;

  constructor(private activatedRoute: ActivatedRoute, private episodeService: EpisodeService, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({page}) => {
      this.currentPage = page && +page;
      this.episodeService.getAll({page}).subscribe(value => {
        this.episodes = value.results;
        this.pageInfo = value.info;
      });
    });
  }

  getNextPage(): void {
    this.router.navigate([this.currentPage ? '../' : 'page', (this.currentPage ?? 1) + 1], {relativeTo: this.activatedRoute});
  }

  getPrevPage() {
    this.router.navigate(['../', this.currentPage - 1], {relativeTo: this.activatedRoute});

  }
}
