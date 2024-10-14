import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-next-gamezada-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
  templateUrl: './next-gamezada-toolbar.component.html',
  styleUrl: './next-gamezada-toolbar.component.scss'
})
export class NextGamezadaToolbarComponent {

}
