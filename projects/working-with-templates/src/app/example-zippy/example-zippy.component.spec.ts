import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleZippyComponent } from './example-zippy.component';

describe('ExampleZippyComponent', () => {
  let component: ExampleZippyComponent;
  let fixture: ComponentFixture<ExampleZippyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleZippyComponent]
    });
    fixture = TestBed.createComponent(ExampleZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
