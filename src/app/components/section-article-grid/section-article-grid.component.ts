import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SectionHeadingComponent } from '../section-heading/section-heading.component';
import { ArticleCardComponent } from '../article-card/article-card.component';

interface ArticlePreview {
  readonly id: number;
  readonly title: string;
  readonly excerpt: string;
  readonly meta: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly imageSrcset: string;
  readonly imageSizes: string;
}

@Component({
  selector: 'app-section-article-grid',
  imports: [SectionHeadingComponent, SearchInputComponent, ArticleCardComponent],
  templateUrl: './section-article-grid.component.html',
  styleUrl: './section-article-grid.component.css'
})
export class SectionArticleGridComponent {
  readonly heading = 'Lorem ipsum dolor sit';
  readonly subHeading = 'Lorem ipsum dolor sit';
  readonly articles: readonly ArticlePreview[] = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      meta: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/images/section2-493w.png',
      imageAlt: '',
      imageSrcset:
        '/images/section2-336w.png 336w, /images/section2-420w.png 420w, /images/section2-493w.png 493w',
      imageSizes: '(min-width: 1024px) 493px, (min-width: 768px) 336px, 420px',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      meta: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/images/section2-493w.png',
      imageAlt: '',
      imageSrcset:
        '/images/section2-336w.png 336w, /images/section2-420w.png 420w, /images/section2-493w.png 493w',
      imageSizes: '(min-width: 1024px) 493px, (min-width: 768px) 336px, 420px',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      meta: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/images/section2-493w.png',
      imageAlt: '',
      imageSrcset:
        '/images/section2-336w.png 336w, /images/section2-420w.png 420w, /images/section2-493w.png 493w',
      imageSizes: '(min-width: 1024px) 493px, (min-width: 768px) 336px, 420px',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      meta: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/images/section2-493w.png',
      imageAlt: '',
      imageSrcset:
        '/images/section2-336w.png 336w, /images/section2-420w.png 420w, /images/section2-493w.png 493w',
      imageSizes: '(min-width: 1024px) 493px, (min-width: 768px) 336px, 420px',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      meta: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/images/section2-493w.png',
      imageAlt: '',
      imageSrcset:
        '/images/section2-336w.png 336w, /images/section2-420w.png 420w, /images/section2-493w.png 493w',
      imageSizes: '(min-width: 1024px) 493px, (min-width: 768px) 336px, 420px',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.',
      meta: 'Lorem ipsum dolor sit amet.',
      imageSrc: '/images/section2-493w.png',
      imageAlt: '',
      imageSrcset:
        '/images/section2-336w.png 336w, /images/section2-420w.png 420w, /images/section2-493w.png 493w',
      imageSizes: '(min-width: 1024px) 493px, (min-width: 768px) 336px, 420px',
    },
  ];
}
