import { Component, input } from '@angular/core';
import { ResponsiveImageComponent } from '../responsive-image/responsive-image.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-overlay-card',
  imports: [ResponsiveImageComponent, ButtonComponent],
  templateUrl: './overlay-card.component.html',
  styleUrl: './overlay-card.component.css',
})
export class OverlayCardComponent {
  readonly title = input.required<string>();
  readonly excerpt = input.required<string>();
  readonly ctaLabel = input<string>('Lorem ipsum');
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input<string>('');
  readonly imageSrcset = input<string>();
  readonly imageSizes = input<string>();
  readonly ratio = input<string>('3 / 4');
}
