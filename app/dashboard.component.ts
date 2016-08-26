import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }              from './hero';
import { HeroService }       from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html' 
})
export class DashboardComponent implements OnInit{
    // Define a heroes array property
    heroes: Hero[] = [];

    // Inject the HeroService in a constructor, hold in private heroService field
    constructor(
        private router: Router,
        private heroService: HeroService
        ){ }

    // ngOnInit lifecycle hook
    ngOnInit(): void{

        // Call the service to get the heroes
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    goToDetail(hero: Hero): void{
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}