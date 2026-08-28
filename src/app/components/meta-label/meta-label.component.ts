import { Component, input } from '@angular/core';
import { IconComponent, IconName } from '../icon/icon.component';

@Component({
  selector: 'app-meta-label',
  imports: [IconComponent],
  templateUrl: './meta-label.component.html',
  styleUrl: './meta-label.component.css',
})
export class MetaLabelComponent {
  readonly text = input.required<string>();
  readonly icon = input<IconName>('calendar');
}
