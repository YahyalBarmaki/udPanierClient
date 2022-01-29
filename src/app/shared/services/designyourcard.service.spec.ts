import { TestBed } from '@angular/core/testing';

import { DesignyourcardService } from './designyourcard.service';

describe('DesignyourcardService', () => {
  let service: DesignyourcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignyourcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
