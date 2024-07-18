import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Villain } from './hero';
import { VILLAINS } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor(private messageService: MessageService) { }

  getVillains(): Observable<Villain[]> {
    const villains = of(VILLAINS);
    this.messageService.addVillain('VillainService: fetched villains');
    return villains;
  }
}
