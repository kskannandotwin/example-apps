import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompWithHostBindingComponent } from './comp-with-host-binding.component';

describe('CompWithHostBindingComponent', () => {
  let component: CompWithHostBindingComponent;
  let fixture: ComponentFixture<CompWithHostBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompWithHostBindingComponent]
    });
    fixture = TestBed.createComponent(CompWithHostBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
