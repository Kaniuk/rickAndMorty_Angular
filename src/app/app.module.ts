import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import {EpisodeModule} from "./modules/episode/episode.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule,
        EpisodeModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
