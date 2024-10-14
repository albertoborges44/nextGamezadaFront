import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-next-gamezada-true-side-bar',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './next-gamezada-true-side-bar.component.html',
  styleUrl: './next-gamezada-true-side-bar.component.scss'
})
export class NextGamezadaTrueSideBarComponent {

}
