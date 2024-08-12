import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-calculation',
  templateUrl: './auto-calculation.component.html',
  styleUrls: ['./auto-calculation.component.scss'],
  animations: [
    trigger('countAnimation', [
      transition(':increment', [
        style({ transform: 'scale(1.2)', color: '#FF5733' }),
        animate('500ms ease-out', style({ transform: 'scale(1)', color: '#007BFF' }))
      ]),
      transition(':decrement', [
        style({ transform: 'scale(0.8)', color: '#C70039' }),
        animate('500ms ease-out', style({ transform: 'scale(1)', color: '#007BFF' }))
      ])
    ])
  ]
})
export class AutoCalculationComponent {
  displayedValue = 0;
  private actualValue = 0;

  calculate() {
    // Simulate a calculation
    this.actualValue += Math.floor(Math.random() * 10 + 1); // Add a random number between 1 and 10
    this.animateValueChange(this.displayedValue, this.actualValue, 1000); // Animate the change over 1 second
  }

  animateValueChange(start: number, end: number, duration: number) {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));

    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      current += increment;
      this.displayedValue = current;

      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
