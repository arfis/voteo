import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-pool-action-element',
  templateUrl: './pool-action-element.component.html',
  styleUrls: ['./pool-action-element.component.scss']
})
export class PoolActionElementComponent implements OnInit {

  hovered;

  @HostListener('mouseover', ['$event'])
  onMouseOver() {
    this.hovered = true;
  }

  @HostListener('mouseout', ['$event'])
  onMouseOut() {
    this.hovered = false;
  }

  constructor() { }

  ngOnInit() {
  }

  get poolName() {
    return 'Create pool';
  }

}
