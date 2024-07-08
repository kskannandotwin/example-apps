import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSearchComponent } from './package-search.component';

describe('PackageSearchComponent', () => {
  let component: PackageSearchComponent;
  let fixture: ComponentFixture<PackageSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageSearchComponent]
    });
    fixture = TestBed.createComponent(PackageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
