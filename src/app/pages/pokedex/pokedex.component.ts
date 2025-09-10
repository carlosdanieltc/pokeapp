import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../core/services/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit {

  constructor(private pokeapiService: PokeapiService) { }

  ngOnInit(): void {
     this.pokeapiService.getPokemonList().subscribe((respuesta: any) => {
      console.log(respuesta); // Solo muestra el resultado en consola
    });
  }
}
