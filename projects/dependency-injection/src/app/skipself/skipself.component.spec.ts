import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipselfComponent } from './skipself.component';

describe('SkipselfComponent', () => {
  let component: SkipselfComponent;
  let fixture: ComponentFixture<SkipselfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkipselfComponent]
    });
    fixture = TestBed.createComponent(SkipselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
