import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './items';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  things: Item[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(item: Item) {
    this.things.push(item);
  }

  getThings() {
    return this.things;
  }

  clearCart() {
    this.things = [];
    return this.things;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
