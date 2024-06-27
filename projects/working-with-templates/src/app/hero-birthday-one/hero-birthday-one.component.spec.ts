import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBirthdayOneComponent } from './hero-birthday-one.component';

describe('HeroBirthdayOneComponent', () => {
  let component: HeroBirthdayOneComponent;
  let fixture: ComponentFixture<HeroBirthdayOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBirthdayOneComponent]
    });
    fixture = TestBed.createComponent(HeroBirthdayOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
