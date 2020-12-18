import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }*/

  //heroes: Hero[] = HEROES;
  heroes: Hero[];

  //selectedHero: Hero;
  
  constructor(private heroService: HeroService, private messageService: MessageService) { 
    //this.selectedHero = { id: 1, name: "Windstorm" };
    this.heroes = [];
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  /*onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add("HeroesComponent: Você selecionou o(a) herói: " + hero.name)
  }*/

}
