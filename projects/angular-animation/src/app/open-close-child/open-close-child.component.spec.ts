import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCloseChildComponent } from './open-close-child.component';

describe('OpenCloseChildComponent', () => {
  let component: OpenCloseChildComponent;
  let fixture: ComponentFixture<OpenCloseChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenCloseChildComponent]
    });
    fixture = TestBed.createComponent(OpenCloseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
