import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeekABooParentComponent } from './peek-a-boo-parent.component';

describe('PeekABooParentComponent', () => {
  let component: PeekABooParentComponent;
  let fixture: ComponentFixture<PeekABooParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeekABooParentComponent]
    });
    fixture = TestBed.createComponent(PeekABooParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
