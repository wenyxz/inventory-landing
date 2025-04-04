import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  openInventory() {
    window.location.href = 'https://inventory.waveoftickets.com/login'; // Replace with your URL
  }
}
