import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pool-summary',
  templateUrl: './pool-summary.component.html',
  styleUrls: ['./pool-summary.component.scss']
})
export class PoolSummaryComponent implements OnInit {

  @Output()
  onSubmitPressed = new EventEmitter();
  @Output()
  onBackPressed = new EventEmitter();
  @Input()
  pool;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.onSubmitPressed.next();
  }

  back() {
    this.onBackPressed.next();
  }

  get name() {
    return this.pool.question.name;
  }

  get openEnded() {
    return this.pool.question.openEnded;
  }

  get multiple() {
    return this.pool.question.multiple;
  }

  get options() {
    return this.pool.question.options;
  }
}
