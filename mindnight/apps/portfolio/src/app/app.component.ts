import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@mindnight/md-data';
import { NavbarComponent, SidebarComponent } from '@mindnight/md-ui';


@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, SidebarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  navbarResponsive = false;
  showSidebar!: boolean;
  items: MenuItem[] = [];

  constructor() {
    this.showSidebar = false;
    this.createMenuNavbar();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 1150) {
      this.navbarResponsive = true;
    } else {
      this.navbarResponsive = false;
    }
  }

  toggleSidebar(status: boolean) {
    this.showSidebar = status;
  }

  private createMenuNavbar() {
    this.items = [];
    //this.items.push({ label: 'Quem sou', routerLink: '/quem-sou' });
    this.items.push({ label: 'Portfólio', routerLink: '/portfolio' });
    //this.items.push({ label: 'Serviços', routerLink: '/servicos' });
    this.items.push({ label: 'Contato', routerLink: '/contato' });
  }
}
