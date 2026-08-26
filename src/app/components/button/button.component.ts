import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  readonly label = input.required<string>();
  readonly variant = input<'primary' | 'text'>('primary');
}
