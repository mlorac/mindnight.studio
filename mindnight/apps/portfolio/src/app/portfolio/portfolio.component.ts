import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputComponent, TagComponent } from '@mindnight/md-ui';
import { CasesService, MenuItem, TagModel, TagsService } from '@mindnight/md-data';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, InputComponent, TagComponent],
  providers: [CasesService, TagsService],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  cases: MenuItem[] = [];
  tags: TagModel[] = [];
  tagsSelected: TagModel[] = [];

  constructor(private tagsService: TagsService,
              private casesService: CasesService
  ) {
    this.getTags();
  }

  ngOnInit(): void {
    this.getCases();
  }

  private getCases(): void {
    this.casesService.getCases().subscribe({
      next: result => {
        this.cases = result;
        this.cases.forEach(item => {
          item.items?.forEach(subItem => {
            subItem.target = this.getColorTag(subItem.label ?? '');
          });
          item.items?.sort((a, b) => a.label?.localeCompare(b.label ?? '') ?? 0);
        });
      },
      error: err => console.error(err),
    });
  }

  private getTags(): void {
    this.tagsService.getTags().subscribe({
      next: result => {
        this.tags = result;
        this.tags.sort((a, b) => a.name > b.name ? 1 : -1);
      },
      error: err => console.error(err),
    });
  }

  private getColorTag(tag: string): string {
    return this.tags.find(item => item.name === tag)?.color ?? '';
  }

  getColorTagSelected(tag: string) {
    return this.tagsSelected.length === 0 || this.tagsSelected.find(item => item.id === tag) ?
      this.tags.find(item => item.id === tag)?.color ?? '' : '';
    
  }
  
  searchByTag(tag: TagModel): void {
    if (this.tagsSelected.includes(tag)) {
      this.tagsSelected.splice(this.tagsSelected.indexOf(tag), 1);
    } else {
      this.tagsSelected.push(tag);
    }
  }
}
