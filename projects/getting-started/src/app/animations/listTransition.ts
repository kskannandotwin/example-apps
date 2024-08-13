import { trigger, stagger, animate, style, group, query as q, transition, keyframes, AnimationMetadata } from '@angular/animations';
const query = (s: string, a: AnimationMetadata | AnimationMetadata[], o = { optional: true }) => q(s, a, o);

export const listTransition = trigger('listTransition', [
    transition('* => *', [ // each time the binding value changes
        query(':enter', [
            style({ opacity: 0 }),
            stagger(100, [
                animate('0.3s', style({ opacity: 1 }))
            ])
        ]),
        query(':leave', [
            stagger(100, [
                animate('0.1s', style({ opacity: 0 }))
            ])
        ])
    ])
]);