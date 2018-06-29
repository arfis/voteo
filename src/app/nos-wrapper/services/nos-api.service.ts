import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosApiService {

  nos;

  constructor() {
    this.nos = (window as any).NOS.V1;
  }

  getAddress(): Observable<any> {
    return this.nos.getAddress();
  }

  getBalance() {

    const NEO = 'c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b';
    const address = 'AZPkgTJixxkSFPyBZrcVpLj9nsHsPDUVkF';

// Example without the optional parameter
    this.nos.getBalance({ asset: NEO })
      .then((balance) => alert(`Balance: ${balance}`))
      .catch((err) => alert(`Error: ${err.message}`));

// Example with the optional parameter
    this.nos.getBalance({ asset: NEO, address })
      .then((balance) => alert(`Balance: ${balance}`))
      .catch((err) => alert(`Error: ${err.message}`));
  }
}
