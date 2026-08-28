import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { MetaLabelComponent } from '../meta-label/meta-label.component';
import { ResponsiveImageComponent } from '../responsive-image/responsive-image.component';

@Component({
  selector: 'app-section-hero',
  imports: [ButtonComponent, MetaLabelComponent, ResponsiveImageComponent],
  templateUrl: './section-hero.component.html',
  styleUrl: './section-hero.component.css',
})
export class SectionHeroComponent {
  readonly meta = 'Lorem ipsum dolor sit amet.';
  readonly title =
    'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit';
  readonly excerpt =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';
  readonly ctaLabel = 'Lorem ipsum.';
  readonly imageSrc = '/images/section1-356w.png';
  readonly imageSrcset =
    '/images/section1-356w.png 356w, /images/section1-640w.png 640w, /images/section1-723w.png 723w';
  readonly imageSizes = '(min-width: 1024px) 723px, (min-width: 768px) 640px, 356px';
}
