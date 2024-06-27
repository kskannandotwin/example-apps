import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday-one',
  templateUrl: './hero-birthday-one.component.html',
  styleUrls: ['./hero-birthday-one.component.scss']
})
export class HeroBirthdayOneComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
