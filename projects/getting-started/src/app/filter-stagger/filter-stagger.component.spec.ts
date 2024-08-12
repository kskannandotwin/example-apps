import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStaggerComponent } from './filter-stagger.component';

describe('FilterStaggerComponent', () => {
  let component: FilterStaggerComponent;
  let fixture: ComponentFixture<FilterStaggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterStaggerComponent]
    });
    fixture = TestBed.createComponent(FilterStaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
