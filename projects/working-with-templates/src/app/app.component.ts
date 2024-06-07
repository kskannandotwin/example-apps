import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'working-with-templates';

  progress = 0;

  setProgress($event: Event) {
    this.progress = +($event.target as HTMLInputElement).value;
  }
}
