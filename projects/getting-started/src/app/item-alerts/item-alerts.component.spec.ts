import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAlertsComponent } from './item-alerts.component';

describe('ItemAlertsComponent', () => {
  let component: ItemAlertsComponent;
  let fixture: ComponentFixture<ItemAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemAlertsComponent]
    });
    fixture = TestBed.createComponent(ItemAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
