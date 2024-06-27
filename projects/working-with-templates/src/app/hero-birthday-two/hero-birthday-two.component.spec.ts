import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBirthdayTwoComponent } from './hero-birthday-two.component';

describe('HeroBirthdayTwoComponent', () => {
  let component: HeroBirthdayTwoComponent;
  let fixture: ComponentFixture<HeroBirthdayTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroBirthdayTwoComponent]
    });
    fixture = TestBed.createComponent(HeroBirthdayTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
