import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleAnimationsPageComponent } from './toggle-animations-page.component';

describe('ToggleAnimationsPageComponent', () => {
  let component: ToggleAnimationsPageComponent;
  let fixture: ComponentFixture<ToggleAnimationsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleAnimationsPageComponent]
    });
    fixture = TestBed.createComponent(ToggleAnimationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
