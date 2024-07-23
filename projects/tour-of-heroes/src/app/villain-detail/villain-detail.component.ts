import { Component } from '@angular/core';
import { Villain } from '../hero';
import { VillainService } from '../villain.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-villain-detail',
  templateUrl: './villain-detail.component.html',
  styleUrls: ['./villain-detail.component.scss']
})
export class VillainDetailComponent {
  villain: Villain | undefined;

  constructor(
    private route: ActivatedRoute,
    private villainService: VillainService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVillain();
  }

  getVillain(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.villainService.getVillain(id)
      .subscribe(villain => this.villain = villain);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.villain) {
      this.villainService.updateVillain(this.villain)
        .subscribe(() => this.goBack());
    }
  }
    
}
