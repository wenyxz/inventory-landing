import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageComponent } from './pages/page/page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PageComponent,
    FooterComponent,
    HeroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inventory-landing';
}
