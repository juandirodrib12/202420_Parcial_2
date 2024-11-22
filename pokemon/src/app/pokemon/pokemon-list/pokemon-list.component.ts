import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonList: Array<Pokemon> = [];
  constructor() {}

  ngOnInit() {}

  NivelPromedio(): number {
    if (this.pokemonList.length === 0) {
      return 0;
    }
    const totalLevel = this.pokemonList.reduce((sum, pokemon) => sum + pokemon.level, 0);
    return totalLevel / this.pokemonList.length;
  }
}
