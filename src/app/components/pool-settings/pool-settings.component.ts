import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pool-settings',
  templateUrl: './pool-settings.component.html',
  styleUrls: ['./pool-settings.component.scss']
})
export class PoolSettingsComponent implements OnInit {

  verifications = [{
    value: 1,
    label: 'KYC'
  },
    {
      value: 2,
      label: 'KYC 2.0'
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
