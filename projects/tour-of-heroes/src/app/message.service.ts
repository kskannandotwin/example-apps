import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messagesHero: string[] = [];
  messagesVillain: string[] = [];

  constructor() { }

  addHero(messageHero: string) {
    this.messagesHero.push(messageHero);
  }

  addVillain(messageVillain: string) {
    this.messagesVillain.push(messageVillain);
  }

  clearHero() {
    this.messagesHero = [];
  }

  clearVillain() {
    this.messagesVillain = [];
  }
}
