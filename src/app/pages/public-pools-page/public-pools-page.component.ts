import {Component, OnInit} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-public-pools-page',
  templateUrl: './public-pools-page.component.html',
  styleUrls: ['./public-pools-page.component.scss']
})
export class PublicPoolsPageComponent {

  pools$;

  constructor(private _poolsService: PoolsService) {
    this.pools$ = _poolsService.getPublicPools();
  }

}
