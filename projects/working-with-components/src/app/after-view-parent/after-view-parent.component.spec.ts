import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterViewParentComponent } from './after-view-parent.component';

describe('AfterViewParentComponent', () => {
  let component: AfterViewParentComponent;
  let fixture: ComponentFixture<AfterViewParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterViewParentComponent]
    });
    fixture = TestBed.createComponent(AfterViewParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
