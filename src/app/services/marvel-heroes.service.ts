import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; //importanto o httpclient
import { environment } from 'src/environments/environment';
import { MarvelResultsPaginated } from '../models/marvel-results-paginated';

@Injectable({
  providedIn: 'root'
})
export class MarvelHeroesService {

  constructor(private http:HttpClient) { }

  public BuscaHerois(){
    let parametros = new HttpParams() //parametros da api
    .set("ts",environment.marvel_ts)
    .set("apikey", environment.marvel_publicKey)
    .set("hash", environment.marvel_hash);

    let urlApi = environment.marvel_url_base + environment.marvel_url_get_caracters; //url da api(onde busca os dados)

    return this.http.get<MarvelResultsPaginated>(urlApi,{params:parametros});//metodo get - busca na api (passa a url e os parametros)
    // O MarvelResultsPaginated é o modelo que representa a resposta do api
  }


}
