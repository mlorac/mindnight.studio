import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'input[mdInput]',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content/> `,
  styleUrl: './input.component.scss',
})
export class InputComponent {}
