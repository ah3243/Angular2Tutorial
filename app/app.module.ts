import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // Allows two way binding in input form

// Import components
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';

// Import services
import { HeroService }   from './hero.service';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule ],

  // Make decalrations so directives are recognised
  declarations: [ AppComponent,
  				  HeroDetailComponent,
            HeroesComponent],

  bootstrap:    [ AppComponent ],

  // Services available in all child components
  providers: [ HeroService ]
})

export class AppModule { }
