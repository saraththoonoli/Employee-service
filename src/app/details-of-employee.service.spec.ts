import { TestBed } from '@angular/core/testing';

import { DetailsOfEmployeeService } from './details-of-employee.service';

describe('DetailsOfEmployeeService', () => {
  let service: DetailsOfEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsOfEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
