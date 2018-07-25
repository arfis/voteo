import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-create-pool-process-page',
  templateUrl: './create-pool-process-page.component.html',
  styleUrls: ['./create-pool-process-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreatePoolProcessPageComponent implements OnInit {

  pool = {questions: [], settings: {}};
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

  goToEdit() {
    this.waitingValidation = false;
  }

  setNextQuestion(question) {
    this.pool[this.currentIndex] = question;
    this.currentIndex++;

    if (this.pool[this.currentIndex]) {
      this.currentQuestion = this.pool.questions[this.currentIndex];
    } else {
      this.pool.questions[this.currentIndex] = {};
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
    // this.currentQuestion = this.pool[this.currentIndex];
    this.pool.questions.splice(index, 1);
  }

  settingUpdate(settings) {
    (this.pool as any).settings = settings;
    console.log(this.pool);
  }

  questionsUpdate(questions) {
    (this.pool as any).questions[this.currentIndex] = questions;
    console.log(this.pool);
  }

  createPool() {
    if (this.hasQuestions) {
      console.log('create', this.pool);
      this._poolsService.createPool(this.pool);
    }
  }

  get hasQuestions() {
    return this.pool.questions.length > 0;
  }

  get numberOfQuestions() {
    return this.pool.questions.length - 1;
  }
}
