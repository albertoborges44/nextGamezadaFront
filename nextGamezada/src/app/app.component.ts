import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameComponent } from '../game/game.component';
import { PoolComponent } from '../pool/pool.component';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { NextGamezadaToolbarComponent } from './next-gamezada-toolbar/next-gamezada-toolbar.component';
import { NextGamezadaTrueSideBarComponent } from './next-gamezada-true-side-bar/next-gamezada-true-side-bar.component';
import { NextGamezadaMainContentPageComponent } from './next-gamezada-main-content-page/next-gamezada-main-content-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GameComponent,
    PoolComponent,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    NextGamezadaToolbarComponent,
    NextGamezadaTrueSideBarComponent,
    NextGamezadaMainContentPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nextGamezada';
}
