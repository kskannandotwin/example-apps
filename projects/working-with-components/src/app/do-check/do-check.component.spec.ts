import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckComponent } from './do-check.component';

describe('DoCheckComponent', () => {
  let component: DoCheckComponent;
  let fixture: ComponentFixture<DoCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoCheckComponent]
    });
    fixture = TestBed.createComponent(DoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
