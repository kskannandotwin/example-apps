import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInputWithAttributeDecoratorComponent } from './my-input-with-attribute-decorator.component';

describe('MyInputWithAttributeDecoratorComponent', () => {
  let component: MyInputWithAttributeDecoratorComponent;
  let fixture: ComponentFixture<MyInputWithAttributeDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyInputWithAttributeDecoratorComponent]
    });
    fixture = TestBed.createComponent(MyInputWithAttributeDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
