import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reverse-stagger',
  templateUrl: './reverse-stagger.component.html',
  styleUrls: ['./reverse-stagger.component.scss'],
  animations: [
    trigger('parentAnimation', [
        transition('void => *', [
            query('.child', style({opacity: 0, transform: 'translateY(-20px)'})),
            query('.child', stagger('80ms', [
                animate('700ms cubic-bezier(0.2, 0, 0.1, 1)', style({opacity: 1, transform: 'translateY(0)'}))
            ]))
        ]),
        transition('* => void', [
            query('.child', style({opacity: 1})),
            query('.child', stagger('-80ms', [
                animate('400ms cubic-bezier(0.6, 0, 0.5, 1)', style({opacity: 0, transform: 'translateY(20px)'}))
            ]))
        ])
    ])
]
})
export class ReverseStaggerComponent {
  visible = false;
}
