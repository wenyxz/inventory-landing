import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2, inject } from '@angular/core';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly MenuIcon = Menu;
  readonly ExitIcon = X;

  isMobile = window.innerWidth <= 859;
  isMenuOpen = false;
  private renderer = inject(Renderer2);
  private touchListener?: () => void;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
      this.renderer.setStyle(document.documentElement, 'overflow', 'hidden'); // Ensure it applies to <html>
      
      // Prevent touch scrolling (for mobile)
      this.touchListener = this.renderer.listen('window', 'touchmove', (e) => e.preventDefault());
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
      this.renderer.removeStyle(document.documentElement, 'overflow');

      // Remove touchmove listener
      if (this.touchListener) {
        this.touchListener();
        this.touchListener = undefined;
      }
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 859;
    if (!this.isMobile && this.isMenuOpen) {
      this.isMenuOpen = false;
      this.renderer.removeStyle(document.body, 'overflow');
      this.renderer.removeStyle(document.documentElement, 'overflow');
      
      if (this.touchListener) {
        this.touchListener();
        this.touchListener = undefined;
      }
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openInventory() {
    window.location.href = 'https://inventory.waveoftickets.com/login'; // Replace with your URL
  }
}
