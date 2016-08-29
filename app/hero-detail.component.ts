import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { Hero }                     from './hero';  
import { HeroService }              from './hero.service';


@Component({
    selector: "my-hero-detail",
    templateUrl: "app/hero-detail.component.html",
    styleUrls:['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    @Output() close = new EventEmitter();
    error: any;
    navigated= false; // True if navigated here

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute){}    
    
    ngOnInit(): void{
        this.route.params.forEach((params: Params)=> {
            if(params['id']!== undefined){
                // Convert routeparameter (string) to (number) with +
                let id = +params['id'];
                this.navigated = true; // id exists flag
                this.heroService.getHero(id)
                    .then(hero => this.hero = hero);
            }else{
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }
    
    goBack(savedHero: Hero = null): void{
        // emit notifies 'HeroesComponent' that hero added or modified, 
        //causing it to refresh(component to component communication)
        this.close.emit(savedHero);
       // Navigate back if id exists
       if(this.navigated){ 
           window.history.back();
       } 
    }

    save(): void{
        this.heroService
            .save(this.hero)
            .then(hero => {
                this.hero = hero; // saved hero /w id if new
                this.goBack(hero);
            })
            .catch(error => this.error = error);
    }




}
