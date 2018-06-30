import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pool-actions',
  templateUrl: './pool-actions.component.html',
  styleUrls: ['./pool-actions.component.scss']
})
export class PoolActionsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  get numberOfPools() {
    return {numberOfPools: 386};
  }
}
