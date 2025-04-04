import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideAngularModule, ArrowRight, Eye, Ticket, ChartColumnBig, Plug } from 'lucide-angular';

@Component({
  selector: 'app-feature',
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss'
})
export class FeatureComponent {
  readonly EyeIcon = Eye;
  readonly TicketIcon = Ticket;
  readonly ChartIcon = ChartColumnBig;
  readonly PlugIcon = Plug;
  readonly ArrowIcon = ArrowRight;

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() tagText: string = '';
  @Input() tagIcon: string = ''; // Assuming you pass icon name or path
  @Input() imageSrc: string = '';
  @Input() reverseLayout: boolean = false; // To control flex direction

  getIcon(): any {
    switch (this.tagIcon) {
      case 'Eye':
        return this.EyeIcon;
      case 'Ticket':
        return this.TicketIcon;
      case 'Chart':
        return this.ChartIcon;
      case 'Plug':
        return this.PlugIcon;
      case 'Arrow':
        return this.ArrowIcon;
      default:
        return this.EyeIcon; // Default icon
    }
  }
  
}
