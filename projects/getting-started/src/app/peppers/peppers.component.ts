import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeppersService } from './peppers.service';

@Component({
  selector: 'app-peppers',
  templateUrl: './peppers.component.html',
  styleUrls: ['./peppers.component.scss']
})
export class PeppersComponent {
  constructor(
    // private http: HttpClient,
    private ps: PeppersService,
    public dialog: MatDialog
  ) {}
}
