import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconBrandComponent } from './icon-brand.component';

describe('IconBrandComponent', () => {
  let component: IconBrandComponent;
  let fixture: ComponentFixture<IconBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBrandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
