import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CasesService, MenuItem, TagModel, TagsService } from '@mindnight/md-data';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  cases: MenuItem[] = [];
  tags: TagModel[] = [];

  constructor(private tagsService: TagsService,
              private casesService: CasesService
  ) {
    this.getTags();
  }

  ngOnInit(): void {
    this.getCases();
  }

  private getCases(): void {
    this.casesService.getCases().then(cases => {
      cases.forEach(item => {
        item.items?.forEach(tag => {
          tag.target = this.getColorOfTag(tag.label ?? '');
        });
        item.items?.sort((a, b) => a.label?.localeCompare(b.label ?? '') ?? 0);
        this.cases.push(item);
      });
    });
  }

  private getTags(): void {
    this.tagsService.getTags().then(tags => tags.forEach(t => this.tags.push(t)));
  }

  getColorOfTag(tag: string) {
    return this.tags.find(item => { console.log(item.name); return item.name === tag})?.color ?? '';
  }
  
  searchByTag(tag: string) {
    console.log(tag);
  }
}
