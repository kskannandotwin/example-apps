import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseStaggerComponent } from './reverse-stagger.component';

describe('ReverseStaggerComponent', () => {
  let component: ReverseStaggerComponent;
  let fixture: ComponentFixture<ReverseStaggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseStaggerComponent]
    });
    fixture = TestBed.createComponent(ReverseStaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
