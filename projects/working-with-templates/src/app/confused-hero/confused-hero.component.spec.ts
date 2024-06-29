import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusedHeroComponent } from './confused-hero.component';

describe('ConfusedHeroComponent', () => {
  let component: ConfusedHeroComponent;
  let fixture: ComponentFixture<ConfusedHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfusedHeroComponent]
    });
    fixture = TestBed.createComponent(ConfusedHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
