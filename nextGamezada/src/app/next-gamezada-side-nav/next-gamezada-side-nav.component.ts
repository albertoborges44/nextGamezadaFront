import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-next-gamezada-side-nav',
  standalone: true,
  imports: [MatSidenavModule, MatDividerModule, MatListModule],
  templateUrl: './next-gamezada-side-nav.component.html',
  styleUrl: './next-gamezada-side-nav.component.scss'
})
export class NextGamezadaSideNavComponent {

}
