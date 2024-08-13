import { Component } from '@angular/core';
import { routerTransition } from './animations/routerTransition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'getting-started';
  public state = false;
  public page = '';

  getState(outlet: any) {

    this.state = outlet.isActivated;
    this.page = (outlet.isActivated && outlet.activatedRoute.snapshot.url[0]) ? outlet.activatedRoute.snapshot.url[0].path : '';
    return this.page;

  }
}
