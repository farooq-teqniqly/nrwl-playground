import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReadingLog } from '@teqniqly/data';

@Component({
  selector: 'tq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reading Log';
  readingLogs: ReadingLog[] = [];

  constructor(private http: HttpClient) {
    this.fetchReadingLogs();
  }

  addReadingLog(): void {
    this.http.post('api/readinglogs', {}).subscribe(() => this.fetchReadingLogs());
  }

  fetchReadingLogs(): void {
    this.http.get<ReadingLog[]>('api/readinglogs').subscribe(logs => this.readingLogs = logs);
  }
}
