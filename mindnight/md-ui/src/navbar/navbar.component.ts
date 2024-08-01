import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../public-api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'md-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();
  @Input() items: MenuItem[] = [];
  @Input() navbarResponsive = false;
  localStorageSubscription: Subscription | undefined;
  
  windowScroll = 0;

  constructor(
    private router: Router,
  ) { }

  @HostListener('window:scroll', ['$event']) 
  doSomething() {
    this.windowScroll = window.scrollY;
  }

  ngOnInit() { }

  goToHome() {
    this.router.navigate(['/']);
  }

  openSidebar() {
    this.toggleSidebar.emit(true);
  }
}
