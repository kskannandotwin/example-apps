import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckParentComponent } from './do-check-parent.component';

describe('DoCheckParentComponent', () => {
  let component: DoCheckParentComponent;
  let fixture: ComponentFixture<DoCheckParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoCheckParentComponent]
    });
    fixture = TestBed.createComponent(DoCheckParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
