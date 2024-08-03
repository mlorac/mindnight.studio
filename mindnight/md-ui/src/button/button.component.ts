import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'button[mdButton]',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-content/>
  `,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {}
