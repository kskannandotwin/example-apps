import { Component } from '@angular/core';
import { Villain } from '../villain';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent {
  villain: Villain = {
    id: 10,
    name: 'Nambiyaar'
  };
}
