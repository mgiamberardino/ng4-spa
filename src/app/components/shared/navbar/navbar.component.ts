import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroesService:HeroesService,
              private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string):void{
    if ("" !== termino){
        this.router.navigate(['/search', termino]);
    }
  }
}
