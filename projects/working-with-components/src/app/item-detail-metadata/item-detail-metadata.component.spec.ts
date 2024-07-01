import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailMetadataComponent } from './item-detail-metadata.component';

describe('ItemDetailMetadataComponent', () => {
  let component: ItemDetailMetadataComponent;
  let fixture: ComponentFixture<ItemDetailMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDetailMetadataComponent]
    });
    fixture = TestBed.createComponent(ItemDetailMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
