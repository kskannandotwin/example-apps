import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTaxReturnComponent } from './hero-tax-return.component';

describe('HeroTaxReturnComponent', () => {
  let component: HeroTaxReturnComponent;
  let fixture: ComponentFixture<HeroTaxReturnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTaxReturnComponent]
    });
    fixture = TestBed.createComponent(HeroTaxReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
