import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { OverlayCardComponent } from '../overlay-card/overlay-card.component';

interface OverlayPreview {
  readonly id: number;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageSrcset: string;
  readonly imageSizes: string;
}

@Component({
  selector: 'app-section-article-overlay',
  imports: [SectionHeadingComponent, OverlayCardComponent],
  templateUrl: './section-article-overlay.component.html',
  styleUrl: './section-article-overlay.component.css',
})
export class SectionArticleOverlayComponent {
  readonly heading = 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.';
  readonly subheading =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.';
  readonly cards: readonly OverlayPreview[] = [
    {
      id: 1,
      title: 'Lorem ipsum',
      excerpt: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/section3-360w.png',
      imageAlt: 'Hotel Riu Palace Bavaro',
      imageSrcset: '/images/section3-284w.png 284w, /images/section3-360w.png 360w',
      imageSizes: '(min-width: 1024px) 362px, (min-width: 768px) 360px, 284px',
    },
    {
      id: 2,
      title: 'Lorem ipsum',
      excerpt: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/section3-360w.png',
      imageAlt: 'Hotel Riu Palace Macao',
      imageSrcset: '/images/section3-284w.png 284w, /images/section3-360w.png 360w',
      imageSizes: '(min-width: 1024px) 362px, (min-width: 768px) 360px, 284px',
    },
    {
      id: 3,
      title: 'Lorem ipsum',
      excerpt: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/section3-360w.png',
      imageAlt: 'Hotel Riu Palace Cabo San Lucas',
      imageSrcset: '/images/section3-284w.png 284w, /images/section3-360w.png 360w',
      imageSizes: '(min-width: 1024px) 362px, (min-width: 768px) 360px, 284px',
    },
    {
      id: 4,
      title: 'Lorem ipsum',
      excerpt: 'Lorem ipsum dolor sit amet consectetur.',
      imageSrc: '/images/section3-360w.png',
      imageAlt: 'Hotel Riu Palace Riviera Maya',
      imageSrcset: '/images/section3-284w.png 284w, /images/section3-360w.png 360w',
      imageSizes: '(min-width: 1024px) 362px, (min-width: 768px) 360px, 284px',
    },
  ];
}
