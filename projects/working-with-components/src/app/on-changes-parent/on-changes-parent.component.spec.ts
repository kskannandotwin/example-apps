import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesParentComponent } from './on-changes-parent.component';

describe('OnChangesParentComponent', () => {
  let component: OnChangesParentComponent;
  let fixture: ComponentFixture<OnChangesParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnChangesParentComponent]
    });
    fixture = TestBed.createComponent(OnChangesParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
