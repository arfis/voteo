import { Injectable } from '@angular/core';
import {PoolsService} from './pools.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PoolResolver implements Resolve<any> {
  constructor(private _poolsService: PoolsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._poolsService.getPool(route.paramMap.get('id'));
  }
}
