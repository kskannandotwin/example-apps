import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingHeroesComponent } from './flying-heroes.component';

describe('FlyingHeroesComponent', () => {
  let component: FlyingHeroesComponent;
  let fixture: ComponentFixture<FlyingHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlyingHeroesComponent]
    });
    fixture = TestBed.createComponent(FlyingHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
