import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyHeroComponent } from './happy-hero.component';

describe('HappyHeroComponent', () => {
  let component: HappyHeroComponent;
  let fixture: ComponentFixture<HappyHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyHeroComponent]
    });
    fixture = TestBed.createComponent(HappyHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
