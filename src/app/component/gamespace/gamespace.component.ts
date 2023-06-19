import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Pokemon } from 'src/model/pokemon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-gamespace',
  templateUrl: './gamespace.component.html',
  styleUrls: ['./gamespace.component.css'],
})
export class GamespaceComponent {
  @Output() GameEvent = new EventEmitter<boolean>
  @Input() listOfPokemon: Pokemon[]
  @Input() targetPokemon: Pokemon

  constructor() {
    this.listOfPokemon = []
    this.targetPokemon = {}
  }

  ngOnInit() {
    console.log(this.targetPokemon.imageUrl)
  }

  checkAnswer(answer: string) {
    this.GameEvent.emit(answer === this.targetPokemon.name)
    }
  }
