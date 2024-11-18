import { TestBed } from '@angular/core/testing';

import { FormBuilderServiceService } from './form-builder-service.service';

describe('FormBuilderServiceService', () => {
  let service: FormBuilderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
