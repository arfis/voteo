import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {PoolsService} from '../../shared/pools/pools.service';

@Component({
  selector: 'app-new-question-page',
  templateUrl: './new-question-page.component.html',
  styleUrls: ['./new-question-page.component.scss']
})
export class NewQuestionPageComponent implements OnInit {

  createQuestionForm;

  constructor(private fb: FormBuilder,
              private _poolsService: PoolsService) {
    this.createQuestionForm = this.fb.group({
      'name': [''],
      'openEnded': [''],
      'multiple': [''],
      'options': this.fb.array([])
    });
  }

  ngOnInit() {
  }

  addOption() {
    const option = this.fb.group({
      'label': ['', Validators.required]
    });
    this.options.push(option);
  }

  createPool({value}) {
    this._poolsService.createPool(value);
  }

  get options() {
    return this.createQuestionForm.get('options') as FormArray;
  }
}
