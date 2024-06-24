import { Component, ContentChild, Input } from '@angular/core';
import { ZippyContentDirective } from '../zippy-content.directive';

let nextId = 0;

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.component.html',
  styleUrls: ['./example-zippy.component.scss']
})

export class ExampleZippyComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}