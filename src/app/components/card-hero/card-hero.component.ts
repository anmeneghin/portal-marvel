import { Component, OnInit, Input } from '@angular/core';
import { MarvelHero } from 'src/app/models/marvel-results-paginated';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {

  @Input() hero: MarvelHero = new MarvelHero(); //o componente heroe recebe dados do tipo MarvelHeroe

  constructor() { }

  ngOnInit() {
  }

  collapseDescription(event){
    let elementoPaiDiv= event.target.parentElement;

    let elementosEsconder = elementoPaiDiv.querySelectorAll(".card-text");

    elementosEsconder.forEach(element => {
      if(element.style.display  === "none")
        element.style.display = "block";// fala que o elemento é exibido
      else
        element.style.display = "none";//esconde o elemento
    });
  }

}
