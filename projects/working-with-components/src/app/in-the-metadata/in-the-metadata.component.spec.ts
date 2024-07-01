import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTheMetadataComponent } from './in-the-metadata.component';

describe('InTheMetadataComponent', () => {
  let component: InTheMetadataComponent;
  let fixture: ComponentFixture<InTheMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InTheMetadataComponent]
    });
    fixture = TestBed.createComponent(InTheMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
