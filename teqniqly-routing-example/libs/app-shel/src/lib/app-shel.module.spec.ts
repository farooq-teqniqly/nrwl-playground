import { async, TestBed } from '@angular/core/testing';
import { AppShelModule } from './app-shel.module';

describe('AppShelModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppShelModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AppShelModule).toBeDefined();
  });
});
