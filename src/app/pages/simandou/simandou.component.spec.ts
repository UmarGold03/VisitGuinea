import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimandouComponent } from './simandou.component';

describe('SimandouComponent', () => {
  let component: SimandouComponent;
  let fixture: ComponentFixture<SimandouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimandouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimandouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
