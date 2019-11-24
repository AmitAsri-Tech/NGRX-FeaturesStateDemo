import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { Joke } from '../../models';

@Component({
  selector: 'app-joke-card-item',
  templateUrl: './joke-card-item.component.html',
  styleUrls: ['./joke-card-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeCardItemComponent implements OnInit {
  @Input() joke: Joke;

  constructor() { }

  ngOnInit() {
  }
}
