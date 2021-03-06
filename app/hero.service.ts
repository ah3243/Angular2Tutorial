import { Injectable } from '@angular/core';

import { Hero }       from './hero';
import { HEROES }     from './mock-heroes';

@Injectable()
export class HeroService{
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    // // Example method to demonstrate delay in retreiving data
    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(() => resolve(HEROES), 5000) // 2 seconds
    //     );
    // }

}
