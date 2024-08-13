import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Pepper {

  label: string;
  img?: string;
  desc?: string;
  shu?: string;
  name: any;

  constructor(o: Pepper) {
    this.name = o.name || '';
    this.label = o.label || '';
    this.img = o.img || '';
    this.desc = o.desc || '';
    this.shu = o.shu || '';
  }
}

@Injectable()
export class PeppersService {

  API_URL = 'https://api.jsonbin.io/b/5c4eb98315735a25423661ce';

  peppers: Pepper[] | undefined;

  constructor(private http: HttpClient) {

  }

  getAllPeppers(cb: { (o: any): void; (arg0: any): void; }) {

   
  }

  httpAllPeppers() {


    
  }


  addPepper(newPepper: Pepper) {


    /*
    return this.http.put( this.API_URL, )
      .map(res => {
        return res.peppers;
      })
      */

  }

}