import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDisabled: boolean;

  selected = 'Pizza';

  selectedList = [
    'Hallo',
    'Dag',
    'Jojo',
    'Gangster',
    'Pizza',
  ];

  ngOnInit(): void {
  }


  button() {
    this.isDisabled = !this.isDisabled;
  }
}
