import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'md-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  @Input() label!: string;
  @Input() class = 'btn-primary';
  @Input() type = 'button';
  @Input() routerLink?: string;
  @Output() click?: EventEmitter<any> = new EventEmitter();

}
