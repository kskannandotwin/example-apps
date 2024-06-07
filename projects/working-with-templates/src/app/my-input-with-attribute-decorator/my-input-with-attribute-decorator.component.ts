import { Attribute, Component } from '@angular/core';

@Component({
  selector: 'app-my-input-with-attribute-decorator',
  templateUrl: './my-input-with-attribute-decorator.component.html',
  styleUrls: ['./my-input-with-attribute-decorator.component.scss']
})
export class MyInputWithAttributeDecoratorComponent {

  constructor(@Attribute('type') public type: string) { }
}
