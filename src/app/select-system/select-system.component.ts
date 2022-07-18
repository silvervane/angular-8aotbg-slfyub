import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-select-system',
  templateUrl: './select-system.component.html',
  styleUrls: ['./select-system.component.css'],
})
export class SelectSystemComponent implements OnInit {
  // 注入heroService
  constructor(private heroService: HeroService) {}



  hero: Hero = new Hero(
    18,
    this.heroService.getHero(),
    'DSA',
    'Chuck Overstreet'
  );

  ngOnInit(): void {}
}
