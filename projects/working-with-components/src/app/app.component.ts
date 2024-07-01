import { Component, Injector } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'working-with-components';

  currentItem = {
    name: 'Teapot'
  }
  clickMessage = '';

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  deleteItem(item: Item) {
    alert(`Delete the ${item.name}.`);
  }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className : '';
    alert('Click me.' + evtMsg);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
