import { Component, OnInit } from '@angular/core';
import { Item, items } from '../items';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
     // First get the product id from the current route.
     const routeParams = this.route.snapshot.paramMap;
     const productIdFromRoute = Number(routeParams.get('id')); //'productId' not working

    // this.item = items.find(item => item.id === +this.route.snapshot.params['id']); // codium

    // Find the product that correspond with the id provided in route.
    this.item = items.find(item => item.id === productIdFromRoute);
  }

  addToCart(item: Item) {
    this.cartService.addToCart(item);
    window.alert('Your item has been added to the cart!');
  }
  
}
