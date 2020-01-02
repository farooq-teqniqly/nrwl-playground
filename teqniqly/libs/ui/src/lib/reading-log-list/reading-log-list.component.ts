import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ReadingLog } from '@teqniqly/data';

@Component({
  selector: 'tq-reading-log-list',
  templateUrl: './reading-log-list.component.html',
  styleUrls: ['./reading-log-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadingLogListComponent implements OnInit {
  @Input() readingLogs: ReadingLog[];

  constructor() { }

  ngOnInit() {
  }

}
