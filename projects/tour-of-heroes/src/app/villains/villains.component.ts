import { Component } from '@angular/core';
import { VILLAINS } from '../mock-villains';
import { Villain } from '../hero';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./../heroes/heroes.component.scss']
})
export class VillainsComponent {
  villains = VILLAINS;
  selectedVillain!: Villain;

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }
}
