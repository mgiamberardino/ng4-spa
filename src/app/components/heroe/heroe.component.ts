import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:Heroe;
  casa:any = {
    DC: 'assets/img/DC.png',
    Marvel: 'assets/img/Marvel.ico'
  };

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params.id);
    });
  }

}
