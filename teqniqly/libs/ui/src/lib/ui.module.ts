import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingLogListComponent } from './reading-log-list/reading-log-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ReadingLogListComponent],
  exports: [ReadingLogListComponent]
})
export class UiModule {}
