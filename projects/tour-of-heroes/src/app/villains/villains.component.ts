import { Component } from '@angular/core';
import { VillainService } from '../villain.service';
import { Villain } from '../hero';

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

  addVillains(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.villainService.addVillain({ name } as Villain)
      .subscribe(villain => {
        this.villains.push(villain);
      });
  }

  deleteVillains(villain: Villain): void {
    this.villains = this.villains.filter(h => h !== villain);
    this.villainService.deleteVillain(villain.id).subscribe();
  }
}
