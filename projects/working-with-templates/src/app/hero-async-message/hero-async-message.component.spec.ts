import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAsyncMessageComponent } from './hero-async-message.component';

describe('HeroAsyncMessageComponent', () => {
  let component: HeroAsyncMessageComponent;
  let fixture: ComponentFixture<HeroAsyncMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroAsyncMessageComponent]
    });
    fixture = TestBed.createComponent(HeroAsyncMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
