import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormReactiveTwoComponent } from './hero-form-reactive-two.component';

describe('HeroFormReactiveTwoComponent', () => {
  let component: HeroFormReactiveTwoComponent;
  let fixture: ComponentFixture<HeroFormReactiveTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroFormReactiveTwoComponent]
    });
    fixture = TestBed.createComponent(HeroFormReactiveTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
