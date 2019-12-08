import { Component, OnInit } from '@angular/core';
import { MarvelHeroesService } from 'src/app/services/marvel-heroes.service';
import { MarvelResultsPaginated } from 'src/app/models/marvel-results-paginated';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  constructor(private servico:MarvelHeroesService) { } //declarando o serviço

  herois:MarvelResultsPaginated = new MarvelResultsPaginated(); //variavel do tipo que a api retorna

  ngOnInit() {
    this.servico.BuscaHerois().subscribe((resposta: MarvelResultsPaginated)=>{ //o subscribe pega a resposta da api
      this.herois= resposta;//armazena resposta da api na variavel herois
    });
  }

}
