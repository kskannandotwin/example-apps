import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from './animations';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'angular-animation';

  @HostBinding('@.disabled')
  public animationsDisabled = false;

  constructor(private contexts: ChildrenOutletContexts) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }

  toggleAnimations() {
    this.animationsDisabled = !this.animationsDisabled;
  }

  ngOnInit() { }
}
