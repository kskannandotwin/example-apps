import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page.component';

describe('HeroListEnterLeavePageComponent', () => {
  let component: HeroListEnterLeavePageComponent;
  let fixture: ComponentFixture<HeroListEnterLeavePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListEnterLeavePageComponent]
    });
    fixture = TestBed.createComponent(HeroListEnterLeavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
