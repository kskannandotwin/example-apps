import { Injectable, Type } from '@angular/core';
import { Hero, Villain } from './hero';
import { LoggerService } from './logger.service';

const HEROES = [
  new Hero('Windstorm', 'Weather mastery'),
  new Hero('Dr Nice', 'Killing them with kindness'),
  new Hero('Magneta', 'Manipulates metallic objects'),
];

const VILLAINS = [
  new Hero('Nambiyaar', 'The veteran villain'),
  new Hero('Raguvaran', 'Medium cinemas'),
  new Hero('Radha Ravi', 'Another veteran villain'),
];

@Injectable()
export class BackendService {

  constructor(private logger: LoggerService) { }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if(type === Hero) {
      // TODO: get from the database
      return Promise.resolve<Hero[]>(HEROES);
    }

    const error = new Error('Cannot get object of this type');
    this.logger.error(error);
    throw error;
  }

  getAllVillains(type: Type<any>): PromiseLike<any[]> {
    if(type === Villain) {
      // TODO: get from the database
      return Promise.resolve<Villain[]>(VILLAINS);
    }

    const error = new Error('Cannot get object of this type');
    this.logger.error(error);
    throw error;
  }
}
