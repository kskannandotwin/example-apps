import { Component, OnInit } from '@angular/core';
import { Villain } from '../hero';
import { VILLAINS } from '../mock-heroes';
import { MessageService } from '../message.service';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./../heroes/heroes.component.scss']
})
export class VillainsComponent implements OnInit {
  villains: Villain[] = VILLAINS;
  selectedVillain!: Villain;

  constructor(private villainService: VillainService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getVillains();
  }

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
    this.messageService.addVillain(`VillainsComponent: Selected villain id=${villain.id}`);
  }

  getVillains(): void {
    this.villainService.getVillains().subscribe(villains => this.villains = villains);
  }
}
