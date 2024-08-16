import { Injectable } from '@angular/core';

export class Pepper {
  label?: string;
  img?: string;
  desc?: string;
  shu?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeppersService {

  // API_URL = 'https://api.jsonbin.io/b/5c4eb98315735a25423661ce';

  peppers: Pepper[] = [];

  constructor() { }
}
