import {
    trigger,
    stagger,
    animate,
    style,
    group,
    query as q,
    transition,
    keyframes,
    AnimationMetadata
} from "@angular/animations";
const query = (s: string, a: AnimationMetadata | AnimationMetadata[], o = { optional: true }) => q(s, a, o);

export const blockTransition = trigger("blockTransition", [
    transition(":enter", [
        query(".block", style({ opacity: 0 })),
        query(
            ".block",
            stagger(50, [
                style({ transform: "translateY(150px)" }),
                animate(
                    "0.7s cubic-bezier(.75,-0.48,.26,1.52)",
                    style({ transform: "translateY(0px)", opacity: 1 })
                )
            ])
        )
    ]),
    transition(":leave", [
        query(
            ".block",
            stagger(50, [
                style({ transform: "translateY(0px)", opacity: 1 }),
                animate(
                    ".4s cubic-bezier(.75,-0.48,.26,1.52)",
                    style({ transform: "translateY(150px)", opacity: 0 })
                )
            ])
        )
    ])
]);
