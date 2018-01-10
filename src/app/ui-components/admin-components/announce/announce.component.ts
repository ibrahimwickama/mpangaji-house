import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.component.html',
  styleUrls: ['./announce.component.css']
})
export class AnnounceComponent implements OnInit {

  @Output() hideAnnouncer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelAnnouncer(){
    this.hideAnnouncer.emit(false);
  }

}
