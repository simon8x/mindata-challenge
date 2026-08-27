import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { IconComponent } from "../../components/icon/icon.component";
import { MetaLabelComponent } from '../../components/meta-label/meta-label.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { ResponsiveImageComponent } from '../../components/responsive-image/responsive-image.component';

@Component({
  selector: 'app-ui-kit',
  imports: [
    ButtonComponent, 
    IconComponent, 
    MetaLabelComponent, 
    SearchInputComponent, 
    SectionHeadingComponent,
    ResponsiveImageComponent
  ],
  templateUrl: './ui-kit.component.html',
  styleUrl: './ui-kit.component.css'
})
export class UiKitComponent {

}
