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

  getVillain(id: number): Observable<Villain> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const villain = VILLAINS.find(h => h.id === id)!;
    this.messageService.addVillain(`VillainService: fetched villain id=${id}`);
    return of(villain);
  }
}
