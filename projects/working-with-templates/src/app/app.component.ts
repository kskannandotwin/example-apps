import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'working-with-templates';

  @ViewChild('bindingInput')
  bindingInput!: ElementRef;

  isUnchanged = true;

  getHTMLAttributeValue(): any {
    console.warn('HTML Attribute value ' + this.bindingInput.nativeElement.getAttributeValue('value'));
  }

  getDOMPropertyValue(): any {
    console.warn('DOM property value ' + this.bindingInput.nativeElement.value);
  }

  working():any {
    console.warn('Test button works!');
  }

  toggleDisabled(): any {
    const testButton = document.getElementById('testButton') as HTMLInputElement;
    testButton.disabled = !testButton.disabled;
    console.warn('testButton.disabled');
  }
}
