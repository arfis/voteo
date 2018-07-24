import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pool-settings',
  templateUrl: './pool-settings.component.html',
  styleUrls: ['./pool-settings.component.scss']
})
export class PoolSettingsComponent implements OnInit {

  poolSettings: FormGroup;
  verifications = [{
    value: 1,
    label: 'KYC'
  },
    {
      value: 2,
      label: 'KYC 2.0'
    }];
  tokenTypes = [
    {
    value: 1,
    label: 'ETH'
    },
    {
      value: 2,
      label: 'NEO'
    }];

  @Output() onUpdate = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.poolSettings = fb.group({
      public: [false],
      verification: ['', Validators.required],
      startDate: [new Date()],
      endDate: [''],
      totalReward: [0],
      totalBudget: [0],
      reward: [false],
      maxParticipants: [''],
      tokenRequirements: [false],
      minimumAmount: [],
      tokensPerVote: [],
      participans: [],
      tokenType: [],
      audianceSpecification: [false]
    });
  }

  ngOnInit() {
    this.poolSettings.valueChanges.subscribe(
      form => {
        console.log(form);
      }
    );
  }

  get isReward() {
    return this.poolSettings.get('reward').value;
  }

  get areTokenRequirements() {
    return this.poolSettings.get('tokenRequirements').value;
  }
}
