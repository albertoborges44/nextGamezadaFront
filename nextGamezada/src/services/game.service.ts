import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private gameApiUrl = 'http://localhost:8080/games/getAll';

  constructor(private http: HttpClient) {}

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameApiUrl);
  }
}
