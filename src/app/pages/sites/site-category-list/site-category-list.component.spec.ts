import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCategoryListComponent } from './site-category-list.component';

describe('SiteCategoryListComponent', () => {
  let component: SiteCategoryListComponent;
  let fixture: ComponentFixture<SiteCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
