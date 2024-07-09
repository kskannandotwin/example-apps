import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { TitleCasePipe } from './title-case.pipe';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    HighlightDirective,
    TitleCasePipe,
    CanvasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
