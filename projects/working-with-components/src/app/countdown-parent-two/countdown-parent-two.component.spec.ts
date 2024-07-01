import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentTwoComponent } from './countdown-parent-two.component';

describe('CountdownParentTwoComponent', () => {
  let component: CountdownParentTwoComponent;
  let fixture: ComponentFixture<CountdownParentTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownParentTwoComponent]
    });
    fixture = TestBed.createComponent(CountdownParentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
