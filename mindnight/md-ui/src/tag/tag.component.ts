import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'md-tag',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="tag" [ngClass]="color">
      {{ label }}
    </div>
  `,
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  @Input() label?: string;
  @Input() color?: string;
}
