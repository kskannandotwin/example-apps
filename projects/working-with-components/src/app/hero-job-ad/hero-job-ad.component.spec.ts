import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobAdComponent } from './hero-job-ad.component';

describe('HeroJobAdComponent', () => {
  let component: HeroJobAdComponent;
  let fixture: ComponentFixture<HeroJobAdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroJobAdComponent]
    });
    fixture = TestBed.createComponent(HeroJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
