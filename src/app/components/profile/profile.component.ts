import {Component, OnInit, ViewChild} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('cryptoAddressElement')
  cryptoAddressElement;

  constructor(private _poolsService: PoolsService) { }

  ngOnInit() {
  }

  copyToClipboard() {
    this.cryptoAddressElement.nativeElement.select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  get cryptoAddress() {
    return this._poolsService.address || '-';
  }

  get address() {
    return 'Bratislava, Slovakia';
  }

  get contacts() {
    return '58 contacts';
  }

  get email() {
    return 'info@bitcoach.net';
  }

  get isValidated() {
    return true;
  }

  get name() {
    return 'Kamil Bitcoach';
  }
}
