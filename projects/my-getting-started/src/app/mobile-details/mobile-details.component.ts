import { Component } from '@angular/core';
import { Mobile, mobiles } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-details',
  templateUrl: './mobile-details.component.html',
  styleUrls: ['./mobile-details.component.scss']
})
export class MobileDetailsComponent {
  mobile: Mobile | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const mobileIdFromRoute = Number(routeParams.get('mobileId'));
    this.mobile = mobiles.find(mobile => mobile.id === mobileIdFromRoute);
  }
}
