import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './favorite-color.component.html',
  styleUrls: ['./favorite-color.component.scss']
})
export class FavoriteColorComponent {
  favoriteColorControl = new FormControl('');
}
