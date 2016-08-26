import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { HeroService }             from './hero.service';


@Component({
    selector: "my-hero-detail",
    templateUrl: "app/hero-detail.component.html"
})
export class HeroDetailComponent implements OnInit{

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute){}    

    @Input()
        hero: Hero;

    ngOnInit(): void{
        this.route.params.forEach((params: Params)=> {

            // Convert routeparameter (string) to (number) with +
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goback(): void{
        window.history.back();
    }
}
