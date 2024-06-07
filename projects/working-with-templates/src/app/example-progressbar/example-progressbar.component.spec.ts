import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProgressbarComponent } from './example-progressbar.component';

describe('ExampleProgressbarComponent', () => {
  let component: ExampleProgressbarComponent;
  let fixture: ComponentFixture<ExampleProgressbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleProgressbarComponent]
    });
    fixture = TestBed.createComponent(ExampleProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
