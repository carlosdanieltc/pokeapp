import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/pokemon?limit=50`)
      .pipe(
        mergeMap((response: any) => {
          const detailRequests: Observable<any>[] = response.results.map((pokemon: any) =>
            this.http.get<any>(pokemon.url)
          );
          return forkJoin(detailRequests);
        }),
        map((pokemons: any[]) =>
          pokemons.map(p => ({
            name: p.name,
            image: p.sprites.front_default,
            types: p.types.map((t: any) => t.type.name)
          }))
        )
      );
  }
}