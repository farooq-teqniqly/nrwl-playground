import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingLogListComponent } from './reading-log-list.component';

describe('ReadingLogListComponent', () => {
  let component: ReadingLogListComponent;
  let fixture: ComponentFixture<ReadingLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
