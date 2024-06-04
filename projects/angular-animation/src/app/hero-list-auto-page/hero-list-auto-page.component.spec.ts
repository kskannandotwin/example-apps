import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListAutoPageComponent } from './hero-list-auto-page.component';

describe('HeroListAutoPageComponent', () => {
  let component: HeroListAutoPageComponent;
  let fixture: ComponentFixture<HeroListAutoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListAutoPageComponent]
    });
    fixture = TestBed.createComponent(HeroListAutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
