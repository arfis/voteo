import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get cryptoAddress() {
    return 'AWPqLQHUARcjrjebmPGbfBh8ZRLmcEhhta';
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
