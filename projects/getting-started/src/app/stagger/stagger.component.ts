import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss'],
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({
  //         opacity: 0,
  //         marginTop: '-10px'
  //       }),
  //       animate(400)
  //     ]),
  //     transition(':leave', [
  //       animate(100, keyframes([
  //         style({
  //           offset: 0.5,
  //           marginLeft: '10px',
  //           opacity: 1
  //         }),
  //         style({
  //           offset: 1,
  //           marginLeft: '-100%',
  //           opacity: 0
  //         })
  //       ]))
  //     ])
  //   ])
  // ],
  animations: [
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
        ], { optional: true }
        )
      ])
    ])
  ]
})
export class StaggerComponent {
  // options: string[] = [
  //   'saksham',
  //   'priyam',
  //   'Kannan',
  //   'Janani',
  //   'Roja Ramani'
  // ];

  // optionVal!: string;

  // AddOption() {
  //   this.options.push(this.optionVal);
  // }

  // RemoveOption(optionVal: string) {
  //   this.options = this.options.filter(val => {
  //     return val != optionVal;
  //   })
  // }

  items = [1, 2, 3, 4];
  show = true;

  ngOnInit() {
    setInterval(() => {
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 0);
    }, 4000);
  }
}
