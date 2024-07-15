import { Component, OnInit } from '@angular/core';
import { Villain } from '../hero';
import { VillainService } from '../villain.service';

@Component({
  selector: 'app-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.scss'],
  providers: [VillainService]
})
export class VillainListComponent implements OnInit {
  villains: Villain[] = [];
  selectedVillain: Villain | undefined;

  constructor(
    private villainService: VillainService
  ) { }

  ngOnInit() {
    this.villains = this.villainService.getVillains();
  }

  selectVillain(villain: Villain) {
    this.selectedVillain = villain;
  }
}
