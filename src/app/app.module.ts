import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListHeroesComponent } from './components/list-heroes/list-heroes.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHeroesComponent,
    CardHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
