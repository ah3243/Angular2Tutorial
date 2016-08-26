import { Injectable } from '@angular/core';
import { Hero }       from './hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{

    private heroesUrl = 'app/heroes'; // URL to web api

    constructor(private http: Http){};

    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
                   .toPromise()
                   .then(response => response.json().data as Hero[])
                   .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.log('An Error Occurred. ' + error);
        return Promise.reject(error.message || error);
    }

    // // Example method to demonstrate delay in retreiving data
    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise<Hero[]>(resolve =>
    //         setTimeout(() => resolve(HEROES), 5000) // 2 seconds
    //     );
    // }

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}
