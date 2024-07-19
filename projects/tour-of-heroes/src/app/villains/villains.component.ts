import { Component } from '@angular/core';
import { Villain } from '../hero';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss']
})
export class VillainsComponent {
  villains: Villain[] = [];

  constructor(private villainService: VillainService) { }

  ngOnInit(): void {
    this.getVillains();
  }

  getVillains(): void {
    this.villainService.getVillains().subscribe(villains => this.villains = villains);
  }
}
