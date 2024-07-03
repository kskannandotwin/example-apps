import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillainsListComponent } from './villains-list.component';

describe('VillainsListComponent', () => {
  let component: VillainsListComponent;
  let fixture: ComponentFixture<VillainsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillainsListComponent]
    });
    fixture = TestBed.createComponent(VillainsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
