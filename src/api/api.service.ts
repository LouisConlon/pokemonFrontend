import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/model/pokemon';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://localhost:7230'

  constructor(private http: HttpClient) { }

  async getPokemon() {
    return axios.get<Pokemon[]>(`${this.apiUrl}/Pokemon`)
  }
}
