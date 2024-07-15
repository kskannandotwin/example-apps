import { Injectable } from '@angular/core';
import { Villain } from './hero';
import { BackendService } from './backend.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  private villains: Villain[] = [];
  constructor(
    private backend: BackendService,
    private logger: LoggerService
  ) { }

  getVillains() {
    this.backend.getAllVillains(Villain).then( (villains: Villain[]) => {
      this.logger.log(`Fetched ${villains.length} villains.`);
      this.villains.push(...villains); // fill cache
    });
    return this.villains;
  }
}
