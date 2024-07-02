import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyParentComponent } from './spy-parent.component';

describe('SpyParentComponent', () => {
  let component: SpyParentComponent;
  let fixture: ComponentFixture<SpyParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpyParentComponent]
    });
    fixture = TestBed.createComponent(SpyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
