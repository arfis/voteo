import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-create-pool-process-page',
  templateUrl: './create-pool-process-page.component.html',
  styleUrls: ['./create-pool-process-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePoolProcessPageComponent implements OnInit {

  pool = [{}];
  currentIndex = 0;
  currentQuestion = {};
  waitingValidation = false;

  constructor(private _poolsService: PoolsService) { }

  ngOnInit() {
    this.currentIndex = 0;
    this.currentQuestion = this.pool[this.currentIndex];
  }

  continueToSummary(question) {
    this.pool[this.currentIndex] = question;
    this.currentQuestion = question;
    this.waitingValidation = true;
  }

  createPool() {
    this._poolsService.createPool(this.pool);
  }

  goToEdit() {
    this.waitingValidation = false;
  }

  setNextQuestion(question) {
    console.log('setting next question');
    this.pool[this.currentIndex] = question;
    this.currentIndex++;

    if (this.pool[this.currentIndex]) {
      this.currentQuestion = this.pool[this.currentIndex];
    } else {
      this.pool[this.currentIndex] = {};
      this.currentQuestion = {
        'name': '',
        'openEnded': false,
        'multiple': false,
        'options': []
      };
    }
  }

  setPreviousQuestion(question) {
    this.pool[this.currentIndex] = question;
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentQuestion = this.pool[this.currentIndex];
    }
  }

  removeCurrentQuestion(index) {
    this.currentIndex--;
    this.currentQuestion = this.pool[this.currentIndex];
    this.pool.splice(index, 1);
  }

  get numberOfQuestions() {
    return this.pool.length - 1;
  }
}
