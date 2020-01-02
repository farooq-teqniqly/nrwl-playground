import { Component } from '@angular/core';

interface ReadingLog {
  title: string;
}

@Component({
  selector: 'tq-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reading Log';
  readingLogs: ReadingLog[] = [{title: 'Something Deeply Hidden'}, {title: 'The Federalist Papers'}];

  addReadingLog(): void {
    this.readingLogs.push({title: `Book ${Math.floor(Math.random() * 1000)}`});
  }
}
