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

  intValue: number;

  selectedIntValue: number;

  selected: string;

  selectedList = [
    'String',   //1
    'Date',     //2
    'Integer',  //3
    'List',     //4
    'FreeList', //5
  ];

  ngOnInit(): void {
    // this.selectedIntValue = 4;
    this.selected = this.selectedList.find(x => x == this.selectedList[this.selectedIntValue-1]);
  }
  
  changeValue({value}){
    this.selected = this.selectedList.find(x => x == this.selectedList[this.selectedIntValue-1]);
    console.log(this.selectedIntValue);
    
  }

  button() {
    this.isDisabled = !this.isDisabled;
  }

  test(i: number) {
    this.intValue = i;
  }

}
