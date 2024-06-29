import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownHeroComponent } from './unknown-hero.component';

describe('UnknownHeroComponent', () => {
  let component: UnknownHeroComponent;
  let fixture: ComponentFixture<UnknownHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnknownHeroComponent]
    });
    fixture = TestBed.createComponent(UnknownHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
