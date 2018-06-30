import { Injectable } from '@angular/core';
import {NosApiService} from '../../nos-wrapper/services/nos-api.service';
import {Methods} from '../Methods';

@Injectable({
  providedIn: 'root'
})
export class PoolsService {

  address;

  constructor(private _nosService: NosApiService) {
    this.address = _nosService.getAddress();
  }

  public createPool(poolParams: any) {
    this._nosService.invokeMethod(
      Methods.scriptHash,
      Methods.createPool,
      poolParams
    );
  }

}
