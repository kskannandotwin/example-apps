import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickMeComponent } from './click-me.component';

describe('ClickMeComponent', () => {
  let component: ClickMeComponent;
  let fixture: ComponentFixture<ClickMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickMeComponent]
    });
    fixture = TestBed.createComponent(ClickMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
