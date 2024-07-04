import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostChildComponent } from './host-child.component';

describe('HostChildComponent', () => {
  let component: HostChildComponent;
  let fixture: ComponentFixture<HostChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostChildComponent]
    });
    fixture = TestBed.createComponent(HostChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
