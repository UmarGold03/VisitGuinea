import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGuidesComponent } from './manage-guides.component';

describe('ManageGuidesComponent', () => {
  let component: ManageGuidesComponent;
  let fixture: ComponentFixture<ManageGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageGuidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
