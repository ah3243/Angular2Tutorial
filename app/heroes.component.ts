import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';
import { Router }    from '@angular/router';

import { Hero }      from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']

})

export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero; // uninitialised hero variable
	addingHero:null;
	error: any;

	constructor(
		private router: Router,
		private heroService: HeroService 
		){ };

	// Get data from the 'heroService'' private variable
	getHeroes(): void {
		// handle the promise from heroService, heroes is passed in as a placeholder and assigned to this.heroes
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

  // Call getHeroes method to initiliase data
	ngOnInit(): void{
		this.getHeroes();
	}

	// Set active item
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	// Link to and route to detailed component on click
	goToDetail(hero: Hero): void{
		this.router.navigate(['/detail', this.selectedHero.id]);
	}

	// Add detail
	addHero(): void{
		this.addingHero = true;
		this.selectedHero = null;
	}
	
	close(savedHero: Hero): void{
		this.addingHero = false;
		if(savedHero){
			this.getHeroes();
		}
	}

	// Delete hero
	deleteHero(hero: Hero, event: any): void{
		event.stopPropagation();
		this.heroService
			.delete(hero)
			.then(res => { 
				this.heroes = this.heroes.filter(h => h !== hero);
				if(this.selectedHero === hero){ this.selectedHero = null;}
			})
			.catch(error => this.error = error);
	}
}



