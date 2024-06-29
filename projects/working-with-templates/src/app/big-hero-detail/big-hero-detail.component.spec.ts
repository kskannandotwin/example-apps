import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigHeroDetailComponent } from './big-hero-detail.component';

describe('BigHeroDetailComponent', () => {
  let component: BigHeroDetailComponent;
  let fixture: ComponentFixture<BigHeroDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigHeroDetailComponent]
    });
    fixture = TestBed.createComponent(BigHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
