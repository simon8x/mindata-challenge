import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from "../../components/icon/icon.component";
import { MetaLabelComponent } from '../../components/meta-label/meta-label.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { ResponsiveImageComponent } from '../../components/responsive-image/responsive-image.component';
import { ArticleCardComponent } from '../../components/article-card/article-card.component';
import { OverlayCardComponent } from '../../components/overlay-card/overlay-card.component';
import { SectionHeroComponent } from '../../components/section-hero/section-hero.component';
import { SectionArticleGridComponent } from '../../components/section-article-grid/section-article-grid.component';
import { SectionArticleOverlayComponent } from '../../components/section-article-overlay/section-article-overlay.component';

@Component({
  selector: 'app-ui-kit',
  imports: [
    ButtonComponent, 
    IconComponent, 
    MetaLabelComponent, 
    SearchInputComponent, 
    SectionHeadingComponent,
    ResponsiveImageComponent,
    ArticleCardComponent,
    OverlayCardComponent,
    SectionHeroComponent,
    SectionArticleGridComponent,
    SectionArticleOverlayComponent
  ],
  templateUrl: './ui-kit.component.html',
  styleUrl: './ui-kit.component.css'
})
export class UiKitComponent {

}
