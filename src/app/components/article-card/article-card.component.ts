import { Component, input } from '@angular/core';
import { MetaLabelComponent } from '../meta-label/meta-label.component';
import { ResponsiveImageComponent } from '../responsive-image/responsive-image.component';

@Component({
  selector: 'app-article-card',
  imports: [MetaLabelComponent, ResponsiveImageComponent],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  readonly title = input.required<string>();
  readonly excerpt = input.required<string>();
  readonly meta = input.required<string>();
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input<string>('');
  readonly imageSrcset = input<string>();
  readonly imageSizes = input<string>();
  readonly ratio = input<string>('16 / 9');
}
