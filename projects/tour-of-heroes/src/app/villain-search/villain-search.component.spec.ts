import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainSearchComponent } from './villain-search.component';

describe('VillainSearchComponent', () => {
  let component: VillainSearchComponent;
  let fixture: ComponentFixture<VillainSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillainSearchComponent]
    });
    fixture = TestBed.createComponent(VillainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
