import { Component, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DisplayService, MenuItem, WINDOW } from '@mindnight/md-data';


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
  localStorageSubscription: Subscription | undefined;
  private _window = inject(WINDOW);
  navbarResponsive = false;
  windowScroll = 0;

  constructor(
    private router: Router,
    public displayService: DisplayService,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this._window.innerWidth < 1150) {
      this.navbarResponsive = true;
    } else {
      this.navbarResponsive = false;
    }
  }

  @HostListener('window:scroll', ['$event']) 
  doSomething() {
    this.windowScroll = this._window.scrollY;
  }

  ngOnInit() {
    this.onResize();
  }


  goToHome() {
    this.router.navigate(['/']);
  }

  openSidebar() {
    this.toggleSidebar.emit(true);
  }

  get isResponsive() {
    return this.displayService.isTablet || this.displayService.isMobile;
  }
}
