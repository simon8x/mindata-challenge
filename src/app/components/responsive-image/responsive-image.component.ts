import { Component, input } from '@angular/core';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrl: './responsive-image.component.css'
})
export class ResponsiveImageComponent {
  readonly src = input.required<string>();
  readonly alt = input.required<string>();
  readonly srcset = input<string>();
  readonly sizes = input<string>();
  readonly ratio = input<string>('16 / 9');
  readonly loading = input<'lazy' | 'eager'>('lazy');
}
