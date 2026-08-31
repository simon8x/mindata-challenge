import { Component, input, computed } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  imports: [IconComponent],
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'text'>('primary');
  readonly href = input<string>();
  readonly isLink = computed(() => this.href() != null);
}
