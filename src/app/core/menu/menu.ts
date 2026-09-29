import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'prb-menu',
  styleUrl: './menu.scss',
  templateUrl: './menu.html',
  host: {
    class: 'menu',
  },
})
export class Menu {}
