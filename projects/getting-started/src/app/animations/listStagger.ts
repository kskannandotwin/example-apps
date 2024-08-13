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

export const listStagger = trigger("listStagger", [
    transition("* <=> *", [
        query(
            ":enter",
            [
                style({ opacity: 0, transform: "translateY(-150px)" }),
                stagger(
                    100,
                    animate(
                        "200ms ease-out",
                        style({ opacity: 1, transform: "translateY(0px)" })
                    )
                )
            ],
            { optional: true }
        ),
        query(":leave", animate("50ms", style({ opacity: 0 })), {
            optional: true
        })
    ])
]);
