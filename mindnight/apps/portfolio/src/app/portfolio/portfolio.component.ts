import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputComponent, TagComponent } from '@mindnight/md-ui';
import { CasesService, DisplayService, MenuItem, TagModel, TagsService } from '@mindnight/md-data';
import { FormControl, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, InputComponent, TagComponent, ReactiveFormsModule],
  providers: [CasesService, TagsService],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  cases: MenuItem[] = [];
  casesFiltered: MenuItem[] = [];

  tags: TagModel[] = [];
  private tagsSelected: TagModel[] = [];
  searchFilter: FormControl = new FormControl(null);

  constructor(private tagsService: TagsService,
              private casesService: CasesService,
              private displayService: DisplayService
  ) {
    this.getTags();
  }

  ngOnInit(): void {
    this.displayService.onResize();
    this.getCases();
  }

  ngAfterViewInit(): void {
    this.searchFilter.valueChanges.subscribe(() => {
      this.filterCases();
    });
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

        this.filterCases();
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

    this.filterCases();
  }

  private filterCases() {
    this.casesFiltered = [...new Set(this.cases)];

    if (this.searchFilter.value) {
      this.casesFiltered = this.casesFiltered.filter(item => {
        return item.title?.toLowerCase().includes(this.searchFilter.value.toLowerCase());
      });
    }

    if (this.tagsSelected.length > 0) {
      this.casesFiltered = this.casesFiltered.filter(item => {
        return item.items?.find(subItem => this.tagsSelected.find(t => t.name === subItem.label));
      });
    }

  }
}
