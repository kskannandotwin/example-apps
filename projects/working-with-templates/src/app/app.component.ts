import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'working-with-templates';
  subTitle = 'Built-in Template Functions';

  item = {
    name: 'Telephone',
    origin: 'Sweden',
    price: 98
  };
}
