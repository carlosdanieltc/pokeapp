import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiService } from '../../core/services/pokeapi.service';
import { PokemonCardComponent } from '../../shared/pokemon-card/pokemon-card.component';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent, AsyncPipe],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

  private pokeapiService = inject(PokeapiService);

  pokemons$ = this.pokeapiService.getPokemonList(); // Observable con los datos listos
  
}
