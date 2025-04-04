import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openInstagram() {
    window.location.href = 'https://www.instagram.com/ticketswave/'; // Replace with your URL
  }

  openDiscord() {
    window.location.href = 'none'; // Replace with your URL
  }

  openTwitter() {
    window.location.href = 'none'; // Replace with your URL
  }

  openYouTube() {
    window.location.href = 'https://www.youtube.com/@TicketWave'; // Replace with your URL
  }

  openTiktok() {
    window.location.href = 'https://www.tiktok.com/@ticketwave'; // Replace with your URL
  }

  openTicketWave() {
    window.location.href = 'https://waveoftickets.com/'; // Replace with your URL
  }

  openMonitors() {
    window.location.href = 'https://www.ticketwave.sk/'; // Replace with your URL
  }

  openWhop() {
    window.location.href = 'https://whop.com/ticketwave-newbie/'; // Replace with your URL
  }

  openToS() {
    window.location.href = 'none'; // Replace with your URL
  }

  openPolicy() {
    window.location.href = 'https://waveoftickets.com/privacy-policy/'; // Replace with your URL
  }

  openSupport() {
    window.location.href = 'none'; // Replace with your URL
  }
}
