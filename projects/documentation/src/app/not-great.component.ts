import { Component } from '@angular/core';

@Component({
    selector: 'app-not-great',
    template: `
        <p>
            not-great works!
        </p>
    `
})
export class NotGreatComponent {

    buggyFunction() {
        // things could be better here...
    }
}