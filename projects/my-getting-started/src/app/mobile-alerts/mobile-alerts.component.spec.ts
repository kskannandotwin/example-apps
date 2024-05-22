import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAlertsComponent } from './mobile-alerts.component';

describe('MobileAlertsComponent', () => {
  let component: MobileAlertsComponent;
  let fixture: ComponentFixture<MobileAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAlertsComponent]
    });
    fixture = TestBed.createComponent(MobileAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
