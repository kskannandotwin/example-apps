import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-hero-async-message',
  templateUrl: './hero-async-message.component.html',
  styleUrls: ['./hero-async-message.component.scss']
})
export class HeroAsyncMessageComponent {
  message$: Observable<string> | undefined;

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  constructor() {
    this.message$ = this.getResendObservable();
  }

  resend() {
    this.message$ = this.getResendObservable();
  }

  private getResendObservable() {
    return interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

  // Alternative message$ formula:
  // this.message$ = fromArray(this.messages).pipe(
  //   map(message => timer(500),
  //   map(() => message)),
  //   concatAll()
  // );

}
