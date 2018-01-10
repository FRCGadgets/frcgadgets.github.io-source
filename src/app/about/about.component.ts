import { Component, OnInit, ViewChild } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout'
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  layout: String = 'row';
  constructor(media: ObservableMedia) {
    media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'md' || change.mqAlias === 'lg') {
        this.layout = 'row';
      } else {
        this.layout = 'column';
      }
    });
   }

  ngOnInit() {
  }

}
