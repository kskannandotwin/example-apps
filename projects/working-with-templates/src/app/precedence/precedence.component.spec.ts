import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecedenceComponent } from './precedence.component';

describe('PrecedenceComponent', () => {
  let component: PrecedenceComponent;
  let fixture: ComponentFixture<PrecedenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecedenceComponent]
    });
    fixture = TestBed.createComponent(PrecedenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
