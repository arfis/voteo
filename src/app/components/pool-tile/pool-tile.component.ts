import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pool-tile',
  templateUrl: './pool-tile.component.html',
  styleUrls: ['./pool-tile.component.scss']
})
export class PoolTileComponent implements OnInit {

  @Input()
  pool;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  openVoting() {
    if (this.hasFreeVoting) {
      this.router.navigate(['pool/2']);
    }
  }

  get poolTitle() {
    return this.pool.name;
  }

  get numberOfQuestions() {
    return this.pool.questionCount;
  }

  get voted() {
    return this.pool.voted;
  }

  get neededVoters() {
    return this.pool.needsVotes;
  }

  get hasFreeVoting() {
    return this.voted < this.neededVoters;
  }
}
