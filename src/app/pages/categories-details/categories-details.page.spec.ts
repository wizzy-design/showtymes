import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesDetailsPage } from './categories-details.page';

describe('CategoriesDetailsPage', () => {
  let component: CategoriesDetailsPage;
  let fixture: ComponentFixture<CategoriesDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
