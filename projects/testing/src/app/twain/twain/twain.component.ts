import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { TwainService } from '../twain.service';

@Component({
  selector: 'twain-quote',
  templateUrl: './twain.component.html',
  styleUrls: ['./twain.component.scss']
})
export class TwainComponent {
  errorMessage!: string;
  quote!: Observable<string>;

  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this.errorMessage = '';
    this.quote = this.twainService.getQuote().pipe(
      startWith('...'),
      catchError((err: any) => {
        // Wait a turn because errorMessage already set once this turn
        setTimeout(() => this.errorMessage = err.message || err.toString());
        return of('...'); // reset message to placeholder
      })
    );
  }
}
