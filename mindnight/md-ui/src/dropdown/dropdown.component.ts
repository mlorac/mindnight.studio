import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'select[mdDropdown]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content />
  `,
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {}
