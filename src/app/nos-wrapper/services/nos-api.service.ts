import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosApiService {

  nos;

  constructor() {
    if ((window as any).NOS) {
      this.nos = (window as any).NOS.V1;
    }
  }

  getAddress(): Observable<any> {
    if (this.nos) {
      return this.nos.getAddress();
    }
  }

  getBalance(asset: string, addres?: string) {

    //examples asset - NEO
    const NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
    const address = 'AZPkgTJixxkSFPyBZrcVpLj9nsHsPDUVkF';

    if (!addres) {
      return this.nos.getBalance({asset})
    } else {
      this.nos.getBalance({asset, address})
    }
  }

  invokeMethod(scriptHash: string, operation: string, args?: string[]) {
    if (this.nos) {
      this.nos.testInvoke({scriptHash, operation, args});
    }
  }

  claimGas(): Observable<string> {
    return this.nos.claimGas();
  }
}
