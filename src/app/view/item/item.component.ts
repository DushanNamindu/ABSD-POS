import {Component, OnInit} from '@angular/core';
import {invalid} from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  msg(): void {
    alert('Work');
  }

}
