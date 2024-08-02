import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from '@mindnight/md-data';


@Component({
  selector: 'md-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter();
  @Input() showSidebar!: boolean;
  @Input() set items(menus: MenuItem[]){
    this._items = [];
    menus.forEach(m => this._items.push(m));
  }

  _items: MenuItem[] = [];

  toggleSidebar() {
    this.closeSidebar.emit(false);
  }
  
}
