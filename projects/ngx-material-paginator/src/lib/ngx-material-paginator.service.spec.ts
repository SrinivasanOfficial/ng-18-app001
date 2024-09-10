import { TestBed } from '@angular/core/testing';

import { NgxMaterialPaginatorService } from './ngx-material-paginator.service';

describe('NgxMaterialPaginatorService', () => {
  let service: NgxMaterialPaginatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialPaginatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
