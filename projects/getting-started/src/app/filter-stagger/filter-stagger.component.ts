import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-stagger',
  templateUrl: './filter-stagger.component.html',
  styleUrls: ['./filter-stagger.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
        query(':leave', [
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ], { optional: true })
      ])
    ]),

    trigger('staggerAnimation', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    trigger('listAnimationAnother', [
      // Stagger for entering items
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ]),
      // Stagger for leaving items
      transition(':leave', [
        query(':leave', [
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 0, transform: 'translateY(20px)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class FilterStaggerComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
  filterText = '';

  get filteredItems() {
    return this.items.filter(item => item.toLowerCase().includes(this.filterText.toLowerCase()));
  }

  addItem() {
    const nextItem = `Item ${this.items.length + 1}`;
    this.items.push(nextItem);
  }

  removeItem() {
    this.items.pop();
  }
}
