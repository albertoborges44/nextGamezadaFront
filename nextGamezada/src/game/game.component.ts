import { Component, OnInit } from '@angular/core';
import { finished } from 'stream';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {

  gamesList: any[] = [];
  errorMessage: string = '';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (data) => this.gamesList = data,
      error: (err) => this.errorMessage = 'Error fetching games: ' + err.message
    });
  }
}
