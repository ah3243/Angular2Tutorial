import { Injectable } from '@angular/core';
import { Hero }       from './hero';
import { Http, Headers, Response }       from '@angular/http';

import 'rxjs/add/operator/toPromise'; // import observable convertion operator

@Injectable()
export class HeroService{

    private heroesUrl = 'app/heroes'; // URL to web api

    constructor(private http: Http){};

    // GET (get hero data)
    getHeroes(): Promise<Hero[]>{
        return this.http.get(this.heroesUrl)
                   .toPromise() // Converts the returned observable to a promise
                   .then(response => response.json().data as Hero[])
                   .catch(this.handleError);
    }

    // retrieve specific record
    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                   .then(heroes => heroes.find(hero => hero.id === id));
    }

    // Save with put or post methods
    save(hero: Hero): Promise<Hero>{
        if(hero.id){
            return this.put(hero);
        }
        return this.post(hero);
    }

    // DELETE (Remove specific hero item)
    delete(hero: Hero): Promise<Response>{
        let headers = new Headers;
        headers.append('Content-Type', 'application/json');

        // Append the id of specific hero to url
        let url = `${this.heroesUrl}${hero.id}`;

        return this.http
                   .delete(url, {headers: headers})
                   .toPromise()
                   .catch(this.handleError);
    }

    // POST (add new hero data)
    private post(hero: Hero): Promise<Hero>{
        let headers = new Headers({
            'Content-Type':'application/json'});
            return this.http
                        .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
                        .toPromise()
                        .then(res => res.json().data)
                        .catch(this.handleError);
    }

    // PUT (update individual hero)
    private put(hero: Hero): Promise<Hero>{
        let headers = new Headers;
        headers.append('Content-Type', 'application/json');

        // Append the id of specific hero to url
        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
                   .put(url, JSON.stringify(hero), {headers: headers})
                   .toPromise()
                   .then(()=> hero)
                   .catch(this.handleError);
    }

    // Handle and catch rejects/erros
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

}
