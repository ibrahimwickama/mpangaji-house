import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  @Output() showDataEntry = new EventEmitter();

  dataEntryInitOptions:boolean = true;
  dataEntryInputs:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  cancelDataEntry(){
    this.showDataEntry.emit(false);
  }

  continueRound(){
    this.dataEntryInitOptions = false;
    this.dataEntryInputs = true;
  }

}
