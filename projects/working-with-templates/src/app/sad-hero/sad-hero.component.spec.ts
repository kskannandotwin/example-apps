import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadHeroComponent } from './sad-hero.component';

describe('SadHeroComponent', () => {
  let component: SadHeroComponent;
  let fixture: ComponentFixture<SadHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadHeroComponent]
    });
    fixture = TestBed.createComponent(SadHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
