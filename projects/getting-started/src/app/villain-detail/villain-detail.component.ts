import { Component, Input } from '@angular/core';
import { Villain } from '../hero';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss']
})
export class VillainDetailComponent {
  @Input() villain!: Villain;
}
