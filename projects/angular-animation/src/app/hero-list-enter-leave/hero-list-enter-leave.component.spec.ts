import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListEnterLeaveComponent } from './hero-list-enter-leave.component';

describe('HeroListEnterLeaveComponent', () => {
  let component: HeroListEnterLeaveComponent;
  let fixture: ComponentFixture<HeroListEnterLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroListEnterLeaveComponent]
    });
    fixture = TestBed.createComponent(HeroListEnterLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
