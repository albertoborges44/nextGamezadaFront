import { Routes } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { PoolComponent } from '../pool/pool.component';

export const routes: Routes = [
  { path: 'game-component', component: GameComponent},
  { path: 'pool-component', component: PoolComponent}
];
