import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'working-with-templates';

  actionName = 'Create and set an attribute';
  isSpecial = true;
  canSave = true;  
  classExpression = 'special clearance';
  styleExpression = 'border: solid red 3px';
  color = 'blue';
  border = '.5rem dashed black';
}
