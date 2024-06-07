import { Component } from '@angular/core';

@Component({
  selector: 'app-single-and-multiple-style-binding',
  templateUrl: './single-and-multiple-style-binding.component.html',
  styleUrls: ['./single-and-multiple-style-binding.component.scss']
})
export class SingleAndMultipleStyleBindingComponent {
  navStyle = 'font-size: 1.2rem; color: cornflowerblue';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';
}
