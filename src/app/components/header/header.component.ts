import {Component, OnInit} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _poolsService: PoolsService) {
  }

  ngOnInit() {
  }

  get address() {
    return this._poolsService.address;
  }
}
