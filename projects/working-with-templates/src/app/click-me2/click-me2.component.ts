import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me2',
  templateUrl: './click-me2.component.html',
  styleUrls: ['./click-me2.component.scss']
})
export class ClickMe2Component {
  clickMessage = '';
  clicks = 1;

  onClickMe2(event: any) {
    const evtMsg = event ? ' Event target is ' + event.target.tagName : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
