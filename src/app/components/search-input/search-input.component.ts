import { Component, input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-search-input',
  imports: [IconComponent],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  readonly labelText = input.required<string>();
  readonly placeholder = input<string>('');
}
