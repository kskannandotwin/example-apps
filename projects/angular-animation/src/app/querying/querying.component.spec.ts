import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryingComponent } from './querying.component';

describe('QueryingComponent', () => {
  let component: QueryingComponent;
  let fixture: ComponentFixture<QueryingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryingComponent]
    });
    fixture = TestBed.createComponent(QueryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
