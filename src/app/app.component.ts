import { Component } from '@angular/core';
import { ApiService } from 'src/api/api.service';
import { Pokemon } from 'src/model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon: Pokemon[] = []
  hasStarted: boolean = false
  targetPokemon: Pokemon = {}
  highScore: number = 0

  constructor(private api: ApiService) {}

  async fetchPokemon(): Promise<void> {
    await this.api.getPokemon()
    .then(response => {
      this.pokemon = response.data
      console.log(response.data)
    })
    console.log("assbanan")
    console.log(this.pokemon)
  }

  async Score(state: boolean) {
    state == true ? this.highScore++ : this.highScore = 0
    await this.initializeRound()
  }

  async initializeRound(): Promise<void> {
    await this.fetchPokemon()
    this.targetPokemon = this.pokemon[Math.floor(Math.random() * 4)]
    console.log(this.targetPokemon)
  }

  async startGame(): Promise<void> {
    this.hasStarted = true
    await this.initializeRound()
  }
}
