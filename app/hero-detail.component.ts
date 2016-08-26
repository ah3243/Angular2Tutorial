import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { HeroService }             from './hero.service';

@Component({
    selector: "my-hero-detail",
    template: `
        <div *ngIf="hero">
			<h2>{{hero.name}} details!</h2>
			<div><label>id: </label>{{hero.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            <button (click)="goBack()">Back</button>
		</div>
    `
})
export class HeroDetailComponent implements OnInit{
    constructor{
        private heroService: HeroService,
        private route: ActivatedRoute
    }

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
