import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeOpenCloseChildComponent } from './me-open-close-child.component';

describe('MeOpenCloseChildComponent', () => {
  let component: MeOpenCloseChildComponent;
  let fixture: ComponentFixture<MeOpenCloseChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeOpenCloseChildComponent]
    });
    fixture = TestBed.createComponent(MeOpenCloseChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
