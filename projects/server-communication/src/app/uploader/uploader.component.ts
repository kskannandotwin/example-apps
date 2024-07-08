import { Component } from '@angular/core';
import { UploaderService } from './uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
  providers: [UploaderService]
})
export class UploaderComponent {
  message = '';

  constructor(private uploaderService: UploaderService) { }

  onPicked(input: HTMLInputElement) {
    const file = input.files?.[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = '';
          this.message = msg;
        }
      );
    }
  }
}
