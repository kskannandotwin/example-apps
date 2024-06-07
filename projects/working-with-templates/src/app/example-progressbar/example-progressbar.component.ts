import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-progressbar',
  templateUrl: './example-progressbar.component.html',
  styleUrls: ['./example-progressbar.component.scss'],
  host: {
    role: 'progressbar',
    'ariavaluemin': '0',
    'ariavaluemax': '100',
    '[attr.aria-valuenow]': 'value'
  }
})
export class ExampleProgressbarComponent {
  @Input() value = 0;
}
