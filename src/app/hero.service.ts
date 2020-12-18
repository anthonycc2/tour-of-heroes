import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  /*getHeroes(): Hero[] {
    return HEROES;
  }*/

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: Heróis adicionados.")
    return of(HEROES);
  }

  /*
  // tirando o observable
  getHeroes(): Hero[] {
    this.messageService.add("HeroService: Heróis adicionados.");
    return HEROES;
  }*/

  /*getHero(id: number): Hero {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return HEROES.find(hero => hero.id === id);
  }*/

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
