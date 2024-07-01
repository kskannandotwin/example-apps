import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliasingComponent } from './aliasing.component';

describe('AliasingComponent', () => {
  let component: AliasingComponent;
  let fixture: ComponentFixture<AliasingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AliasingComponent]
    });
    fixture = TestBed.createComponent(AliasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
