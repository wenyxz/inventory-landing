import { Component } from '@angular/core';
import { LucideAngularModule, Check } from 'lucide-angular';

@Component({
  selector: 'app-pricing',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  readonly CheckIcon = Check;
}
