import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // 🔹 Trae los primeros 20 pokémon con sus detalles
  getPokemonList(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/pokemon?limit=20`)
  }
}