import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeppersComponent } from './peppers.component';

describe('PeppersComponent', () => {
  let component: PeppersComponent;
  let fixture: ComponentFixture<PeppersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeppersComponent]
    });
    fixture = TestBed.createComponent(PeppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
