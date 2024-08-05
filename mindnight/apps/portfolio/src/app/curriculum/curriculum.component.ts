import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, TagComponent } from '@mindnight/md-ui';
import { DisplayService, MenuItem } from '@mindnight/md-data';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TagComponent, RouterModule],
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

  constructor(public displayService: DisplayService,
              private title: Title,
              private meta: Meta
  ) {
    this.isMobile = this.displayService.isMobile || this.displayService.isTablet;
    this.title.setTitle('Olá, eu sou a Carol Manfredini');
    this.meta.updateTag({ name: 'description', content: 'Portfólio pessoal de Carol Manfredini. Desenvolvedora de sistemas desde 2013, é especialista em angular e apaixonada por design. Aqui estão alguns cases de estudo como UX designer' });
  }

  setMenuVisible(fragment?: string) {
    this.menus.forEach(menu => {
      menu.visible = menu.fragment === fragment;
    });
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
