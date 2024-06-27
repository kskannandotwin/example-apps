import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Template Expression Operators';

  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
