import { GameService } from './../../services/game.service';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

interface Game {
  name : string;
  id: number;
  maxPlayers: number;
  genre: string;
  price: number;
  onSale: boolean;
  finished: boolean;
  coop: boolean;
}

@Component({
  selector: 'app-next-gamezada-true-side-bar',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './next-gamezada-true-side-bar.component.html',
  styleUrl: './next-gamezada-true-side-bar.component.scss'
})

export class NextGamezadaTrueSideBarComponent implements OnInit {

  someDogShit = 'yo';
  formIsInvalid = false;

  constructor(private gameService: GameService){
  }

  data: any;
  errorMessage: string | null = null;

  ngOnInit() {
    console.log('entrou no onInit')
  }

  getAllGames() {
    console.log('entrou aqui', this.someDogShit);
    this.gameService.getGames().subscribe(
      (response) => {
        this.data = response;
        console.log('resposta da requisicao', this.data);
      }
    )
  }

}
