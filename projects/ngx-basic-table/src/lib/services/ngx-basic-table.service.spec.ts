import { TestBed } from '@angular/core/testing';

import { NgxBasicTableService } from './ngx-basic-table.service';

describe('NgxBasicTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBasicTableService = TestBed.inject(NgxBasicTableService);
    expect(service).toBeTruthy();
  });
});
