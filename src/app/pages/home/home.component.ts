import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../components/section-hero/section-hero.component';
import { SectionArticleGridComponent } from '../../components/section-article-grid/section-article-grid.component';
import { SectionArticleOverlayComponent } from '../../components/section-article-overlay/section-article-overlay.component';

@Component({
  selector: 'app-home',
  imports: [
    SectionHeroComponent,
    SectionArticleGridComponent,
    SectionArticleOverlayComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
