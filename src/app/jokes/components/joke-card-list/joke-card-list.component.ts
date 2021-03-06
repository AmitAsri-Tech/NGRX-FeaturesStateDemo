import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Joke } from '../../models';

@Component({
  selector: 'app-joke-card-list',
  templateUrl: './joke-card-list.component.html',
  styleUrls: ['./joke-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeCardListComponent implements OnInit {

  @Input() jokes: Joke[];
  @Input() loading: boolean;
  @Input() error: any;

  @Output() refresh = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
