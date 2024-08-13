import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]
  ),
  transition(':leave',
    [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
  )
]);

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter',
      [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
      { optional: true }
    ),
    query(':leave',
      animate('200ms', style({ opacity: 0 })),
      { optional: true }
    )
  ])
]);

const images = [
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/6C4y1oxC6182MsyjvK/giphy.gif',
  'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
  'https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif',
  'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/6C4y1oxC6182MsyjvK/giphy.gif',
  'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
  'https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif',
  'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
  'https://media.giphy.com/media/6C4y1oxC6182MsyjvK/giphy.gif',
  'https://media.giphy.com/media/Ov5NiLVXT8JEc/giphy.gif',
  'https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif',
  'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
  'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'
];

@Component({
  selector: 'app-stagger',
  templateUrl: './stagger.component.html',
  styleUrls: ['./stagger.component.scss'],
  animations: [fadeAnimation, listAnimation]
})
export class StaggerComponent {
  items: any[] = [];
  images: string[] = [];
  show = true;

  toggleList() {
    this.items = this.items.length ? [] : [0,1,2,3,4,5,6,7,8,9,10];
  }

  toggleImages() {
    this.images = this.images.length ? [] : images;
  }
}
