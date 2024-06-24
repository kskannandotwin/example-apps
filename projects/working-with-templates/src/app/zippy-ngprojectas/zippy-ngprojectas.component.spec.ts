import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyNgprojectasComponent } from './zippy-ngprojectas.component';

describe('ZippyNgprojectasComponent', () => {
  let component: ZippyNgprojectasComponent;
  let fixture: ComponentFixture<ZippyNgprojectasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyNgprojectasComponent]
    });
    fixture = TestBed.createComponent(ZippyNgprojectasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
