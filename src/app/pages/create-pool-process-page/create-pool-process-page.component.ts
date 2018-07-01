import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-create-pool-process-page',
  templateUrl: './create-pool-process-page.component.html',
  styleUrls: ['./create-pool-process-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePoolProcessPageComponent implements OnInit {

  pool;
  waitingValidation = false;

  constructor(private _poolsService: PoolsService) { }

  ngOnInit() {
  }

  setUpPool(pool) {
    this.pool = pool;
    this.waitingValidation = true;
  }

  createPool() {
    this._poolsService.createPool(this.pool);
  }

  goToEdit() {
    this.waitingValidation = false;
  }
}
