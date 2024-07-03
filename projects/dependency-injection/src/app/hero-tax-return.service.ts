import { Injectable } from '@angular/core';
import { HeroesService } from './heroes.service';
import { HeroTaxReturn } from './hero';


@Injectable({
  providedIn: 'root'
})
export class HeroTaxReturnService {

  private currentTaxReturn!: HeroTaxReturn;
  private originalTaxReturn!: HeroTaxReturn;

  constructor(private heroesService: HeroesService) { }

  set taxReturn(htr: HeroTaxReturn) {
    this.originalTaxReturn = htr;
    this.currentTaxReturn = htr.clone();
  }

  get taxReturn(): HeroTaxReturn {
    return this.currentTaxReturn;
  }

  restoreTaxReturn() {
    this.taxReturn = this.originalTaxReturn;
  }

  saveTaxReturn() {
    this.taxReturn = this.currentTaxReturn;
    this.heroesService.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
