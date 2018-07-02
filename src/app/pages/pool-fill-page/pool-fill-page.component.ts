import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pool-fill-page',
  templateUrl: './pool-fill-page.component.html',
  styleUrls: ['./pool-fill-page.component.scss']
})
export class PoolFillPageComponent implements OnInit {

  pool;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.data);
    this.pool = this.route.snapshot.data.pool;
  }


}
