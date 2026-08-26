import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [IconComponent]
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'text'>('primary');
}
