import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiObjectCallComponent } from './api-object-call.component';

describe('ApiObjectCallComponent', () => {
  let component: ApiObjectCallComponent;
  let fixture: ComponentFixture<ApiObjectCallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiObjectCallComponent]
    });
    fixture = TestBed.createComponent(ApiObjectCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
