import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TagComponent } from '@mindnight/md-ui';
import { DisplayService, MenuItem } from '@mindnight/md-data';


@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TagComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
})
export class CurriculumComponent {
  isMobile = false;
  menus: MenuItem[] = [
    { label: 'Resumo', fragment: 'resumo', visible: true },
    { label: 'Experiências', fragment: 'experiencia', visible: false },
    { label: 'Formação', fragment: 'formacao', visible: false },
    // { label: 'Social', fragment: 'social', visible: false }
  ];

  constructor(public displayService: DisplayService) {
    this.isMobile = this.displayService.isMobile || this.displayService.isTablet;
  }

  setMenuVisible(fragment?: string) {
    this.menus.forEach(menu => {
      menu.visible = menu.fragment === fragment;
    });
    console.log(this.menus);
  }

  get isResumeVisible() {
    return this.menus.find(menu => menu.fragment === 'resumo')?.visible;
  }

  get isExperienceVisible() {
    return this.menus.find(menu => menu.fragment === 'experiencia')?.visible;
  }

  get isFormationVisible() {
    return this.menus.find(menu => menu.fragment === 'formacao')?.visible;
  }

  get isSocialVisible() {
    return this.menus.find(menu => menu.fragment === 'social')?.visible;
  }
}
