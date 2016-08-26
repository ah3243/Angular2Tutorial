import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // Allows two way binding in input form
import { HttpModule }    from '@angular/http';

// Imports for loading and configuring the in-memory web api
import { XHRBackend }    from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

// Import Root components/routes
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

// Import components
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent }  from './dashboard.component';

// Import services
import { HeroService }   from './hero.service';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  routing,
                  HttpModule
                ],

  // Make decalrations so directives are recognised
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  DashboardComponent],

  // Services available in all child components
  providers:    [ 
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
   ],


  bootstrap:    [ AppComponent ],
})

export class AppModule { }
