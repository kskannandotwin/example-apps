import { trigger, stagger, animate, style, group, query as q, transition, keyframes, AnimationMetadata } from '@angular/animations';
const query = (s: string, a: AnimationMetadata | AnimationMetadata[], o = { optional: true }) => q(s, a, o);

export const compTransition = trigger('compTransition', [
    transition(':enter', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(50, [
            style({ transform: 'translateY(100px)' }),
            animate('0.5s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(0px)', opacity: 1 })),
        ])),
    ]),
    transition(':leave', [
        query('.block', stagger(20, [
            style({ transform: 'translateY(0px)', opacity: 1 }),
            animate('.2s cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateY(100px)', opacity: 0 })),
        ])),
    ])
]);