import { Injectable } from '@nestjs/common';
import { ReadingLog } from '@teqniqly/data';

@Injectable()
export class AppService {
  readingLogs: ReadingLog[] = [{title: 'Something Deeply Hidden'}, {title: 'The Federalist Papers'}];

  getData(): ReadingLog[] {
    return this.readingLogs;
  }

  addReadingLog(): void {
    this.readingLogs.push({title: `Book ${Math.floor(Math.random() * 1000)}`});
  }
}
